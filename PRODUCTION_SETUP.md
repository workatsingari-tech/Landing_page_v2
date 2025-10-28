# 🚀 Production Email Setup Guide

This guide will help you set up production email sending so all waitlist signups receive thank you emails.

## Current Status

✅ **Development Setup Complete**
- Database: Storing all emails in Supabase
- Edge Function: Deployed and working
- Frontend: Form validation and user feedback
- Email Service: Resend configured (test mode)

⚠️ **Production Limitation**
- Currently, emails only send to `workatsingari@gmail.com` (Resend test restriction)
- All other emails are saved to database but don't receive email notifications

---

## 📧 Step 1: Verify Your Domain in Resend

### 1.1 Add Your Domain

1. Go to **https://resend.com/domains**
2. Click **"Add Domain"**
3. Enter your domain: `singari.com` (or your actual domain)
4. Click **"Add"**

### 1.2 Add DNS Records

Resend will provide DNS records. Add these to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):

#### Example Records:
```
Type: TXT
Name: @ (or your domain)
Value: resend-verification=xxxxxxxxxx
TTL: 3600

Type: MX
Name: @ (or your domain)
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10
TTL: 3600

Type: TXT
Name: resend._domainkey
Value: p=MIGfMA0GCSq... (DKIM key provided by Resend)
TTL: 3600
```

**Note:** Your actual records will be different. Copy them exactly from Resend dashboard.

### 1.3 Verify Domain

1. After adding DNS records, wait 5-10 minutes
2. Click **"Verify"** in Resend dashboard
3. ✅ Status should change to **"Verified"**

**Tip:** DNS propagation can take up to 24 hours in some cases, but usually completes within 15 minutes.

---

## 🔧 Step 2: Update Environment Variables

Once your domain is verified:

1. Go to **Supabase Dashboard:**  
   https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/settings/functions

2. Find the `FROM_EMAIL` variable

3. **Update it:**
   - Old value: `onboarding@resend.dev`
   - New value: `noreply@singari.com` (or `hello@singari.com`, `support@singari.com`, etc.)

4. Click **"Save"**

---

## 🚀 Step 3: Redeploy Edge Function

After updating the environment variable, redeploy the function:

```powershell
# In your project directory
cd "C:\Users\sajal\OneDrive\Documents\GitHub\Landing_page_v2"

# Redeploy the function
supabase functions deploy send-thankyou --project-ref hsvrwedgrpxaiwvteqay
```

Or use the helper script:
```powershell
.\deploy-function.ps1
```

---

## ✅ Step 4: Test Production Emails

Test with different email addresses:

```powershell
# Test with any email (not just workatsingari@gmail.com)
$body = @{ email = "test@example.com" } | ConvertTo-Json
Invoke-WebRequest -Method POST `
  -Uri "https://hsvrwedgrpxaiwvteqay.supabase.co/functions/v1/send-thankyou" `
  -Headers @{"Content-Type"="application/json"; "Authorization"="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdnJ3ZWRncnB4YWl3dnRlcWF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTEwOTcsImV4cCI6MjA3NzEyNzA5N30.VzwwPLTHPLHaYoXSuV2k1gOgfwywZp1-BSgrYkL1G4E"} `
  -Body $body
```

**Check:**
- ✅ Response status: 200
- ✅ Email in database
- ✅ Email delivered to recipient's inbox

---

## 🎨 Optional Enhancements

### Enhancement 1: Custom Email Templates

Update the email HTML in `supabase/functions/send-thankyou/index.ts`:

```typescript
// Find this section around line 70
html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <img src="https://yourdomain.com/logo.png" alt="Singari" style="width: 150px; margin-bottom: 20px;" />
    <h2 style="color: #082159;">Welcome to Singari! 🎉</h2>
    <p>Hi there,</p>
    <p>Thank you for joining the Singari waitlist! We're thrilled to have you as part of our early community.</p>
    
    <!-- Add your custom content here -->
    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-top: 0;">What's Next?</h3>
      <ul>
        <li>Early access when we launch</li>
        <li>Exclusive beta features</li>
        <li>Priority support</li>
      </ul>
    </div>
    
    <p style="margin-top: 30px;">Stay tuned!</p>
    <p><strong>Best regards,</strong><br/>The Singari Team</p>
    
    <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;" />
    <p style="font-size: 12px; color: #999; text-align: center;">
      You received this email because you signed up for the Singari waitlist.<br/>
      <a href="https://singari.com/unsubscribe?email={{email}}" style="color: #999;">Unsubscribe</a>
    </p>
  </div>
`
```

After updating, redeploy: `.\deploy-function.ps1`

---

### Enhancement 2: Email Analytics

Track email opens and clicks:

1. **Add tracking pixel** (in HTML):
```html
<img src="https://yourdomain.com/track/open?email={{email}}" width="1" height="1" style="display:none;" />
```

2. **Use Resend Analytics:**
   - Go to https://resend.com/emails
   - View delivery status, opens, clicks
   - Export data for analysis

---

### Enhancement 3: Unsubscribe Functionality

#### 3.1 Add `unsubscribed` column to database:

```sql
-- Run in Supabase SQL Editor
ALTER TABLE mailing_list 
ADD COLUMN unsubscribed BOOLEAN DEFAULT FALSE,
ADD COLUMN unsubscribed_at TIMESTAMPTZ;
```

#### 3.2 Create unsubscribe endpoint:

Create new file: `supabase/functions/unsubscribe/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const PROJECT_URL = Deno.env.get("PROJECT_URL")!;
const SERVICE_ROLE = Deno.env.get("SERVICE_ROLE_KEY")!;

serve(async (req: Request) => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");
  
  if (!email) {
    return new Response("Email required", { status: 400 });
  }
  
  const supabase = createClient(PROJECT_URL, SERVICE_ROLE);
  
  await supabase
    .from('mailing_list')
    .update({ unsubscribed: true, unsubscribed_at: new Date().toISOString() })
    .eq('email', email);
  
  return new Response(`
    <html>
      <body style="font-family: Arial; text-align: center; padding: 50px;">
        <h2>You've been unsubscribed</h2>
        <p>You will no longer receive emails from Singari.</p>
      </body>
    </html>
  `, { headers: { "Content-Type": "text/html" } });
});
```

Deploy: `supabase functions deploy unsubscribe --project-ref hsvrwedgrpxaiwvteqay`

---

### Enhancement 4: Double Opt-In Confirmation

Require users to confirm their email:

#### 4.1 Add confirmation token to database:

```sql
ALTER TABLE mailing_list 
ADD COLUMN confirmed BOOLEAN DEFAULT FALSE,
ADD COLUMN confirmation_token TEXT,
ADD COLUMN confirmed_at TIMESTAMPTZ;
```

#### 4.2 Update Edge Function to send confirmation email instead:

```typescript
// Generate random token
const token = crypto.randomUUID();

// Save with token
await supabase
  .from('mailing_list')
  .insert({ email, confirmation_token: token });

// Send confirmation email with link
const confirmUrl = `https://yourdomain.com/confirm?token=${token}`;
```

#### 4.3 Create confirm endpoint to verify email

---

## 🔍 Monitoring & Maintenance

### Check Email Logs
```powershell
# View Edge Function logs
supabase functions logs send-thankyou --project-ref hsvrwedgrpxaiwvteqay
```

### Database Queries

```sql
-- Total signups
SELECT COUNT(*) FROM mailing_list;

-- Signups today
SELECT COUNT(*) FROM mailing_list 
WHERE created_at::date = CURRENT_DATE;

-- Recent signups
SELECT * FROM mailing_list 
ORDER BY created_at DESC 
LIMIT 20;
```

---

## 🛡️ Security Best Practices

1. **Rate Limiting:**
   - Add Cloudflare in front of your Edge Function
   - Configure rate limits (e.g., 5 signups per IP per hour)

2. **Spam Protection:**
   - Add reCAPTCHA to frontend form
   - Implement honeypot fields
   - Email verification (double opt-in)

3. **Data Privacy:**
   - Add privacy policy link
   - GDPR compliance (for EU users)
   - Data export/deletion endpoints

---

## 📊 Resend Pricing Tiers

| Tier | Monthly Emails | Price |
|------|---------------|-------|
| Free | 3,000 | $0 |
| Pro | 50,000 | $20 |
| Business | 100,000 | $80 |
| Enterprise | Custom | Contact |

**Tip:** Start with Free tier. Upgrade when you reach 2,500 emails/month.

---

## 🐛 Troubleshooting

### Emails not sending after domain verification?

1. Check DNS records are correct (use https://mxtoolbox.com/)
2. Verify `FROM_EMAIL` matches verified domain
3. Check Resend dashboard for delivery errors
4. Review Edge Function logs for errors

### SPF/DKIM Issues?

- Ensure all DNS records from Resend are added correctly
- Wait 24 hours for full DNS propagation
- Test email deliverability with https://mail-tester.com/

---

## ✅ Production Checklist

Before launching:

- [ ] Domain verified in Resend
- [ ] `FROM_EMAIL` updated to your domain
- [ ] Edge Function redeployed
- [ ] Test emails sent to multiple addresses
- [ ] Email template customized with branding
- [ ] Unsubscribe link added
- [ ] Privacy policy link included
- [ ] Analytics/tracking configured
- [ ] Database backups enabled
- [ ] Monitoring alerts set up

---

## 📞 Support Resources

- **Resend Docs:** https://resend.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **Your Function URL:** https://hsvrwedgrpxaiwvteqay.supabase.co/functions/v1/send-thankyou
- **Database:** https://supabase.com/dashboard/project/hsvrwedgrpxaiwvteqay/editor

---

**Good luck with your launch! 🚀**
