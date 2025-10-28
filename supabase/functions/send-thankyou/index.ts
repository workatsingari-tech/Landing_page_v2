// Supabase Edge Function to handle email signup
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("PROJECT_URL")!;
const SERVICE_ROLE = Deno.env.get("SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "onboarding@resend.dev";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function isValidEmail(email: unknown): email is string {
  if (typeof email !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const email = body?.email;

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role key
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

    // Insert into Supabase table
    const { data: insertData, error: insertError } = await supabase
      .from('mailing_list')
      .insert({ email })
      .select();

    if (insertError) {
      console.error("DB insert failed:", insertError);
      
      // If duplicate email, treat as success and continue to send email
      if (insertError.code === '23505' || insertError.message?.includes("duplicate")) {
        console.log("Email already exists, continuing to send thank you email");
      } else {
        return new Response(
          JSON.stringify({ error: "Failed to save email", detail: insertError.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    } else {
      console.log("Email successfully saved to database:", insertData);
    }

    // Send thank you email via Resend API
    const emailPayload = {
      from: FROM_EMAIL,
      to: [email],
      subject: "Welcome to Singari - You're on the list! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #082159;">Welcome to Singari! 🎉</h2>
          <p>Hi there,</p>
          <p>Thank you for joining the Singari waitlist! We're thrilled to have you as part of our early community.</p>
          <p>You'll be among the first to know when we launch, and we'll keep you updated on our progress.</p>
          <p style="margin-top: 30px;">Stay tuned!</p>
          <p><strong>Best regards,</strong><br/>The Singari Team</p>
          <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999; text-align: center;">
            You received this email because you signed up for the Singari waitlist.
          </p>
        </div>
      `,
      text: `Hi there!\n\nThank you for joining the Singari waitlist! We're thrilled to have you as part of our early community.\n\nYou'll be among the first to know when we launch, and we'll keep you updated on our progress.\n\nStay tuned!\n\nBest regards,\nThe Singari Team`
    };

    const mailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailPayload)
    });

    if (!mailRes.ok) {
      const text = await mailRes.text();
      console.error("Resend API error:", mailRes.status, text);
      
      // Email failed but DB insert succeeded - return partial success
      return new Response(
        JSON.stringify({ 
          status: "partial_success", 
          message: "Email saved but notification failed to send",
          detail: text 
        }),
        { status: 207, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Thank you email sent successfully");

    return new Response(
      JSON.stringify({ 
        status: "success", 
        message: "You're on the waitlist! Check your email for confirmation." 
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
