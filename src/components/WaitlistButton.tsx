import React, { useState } from "react";
import { toast } from "sonner";

// Supabase configuration - uses environment variables with fallback
// Note: anon key is safe to expose (it's public and has limited permissions)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
            const response = await fetch(
        `${SUPABASE_URL}/functions/v1/send-thankyou`,
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("You're on the waitlist! Check your email 🎉");
        setEmail("");
      } else if (response.status === 207) {
        // Partial success - email saved but notification failed
        toast.success("You're on the waitlist! 🎉");
        setEmail("");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full pt-2">
      {/* Desktop Layout */}
      <form
        onSubmit={handleSubmit}
        className="hidden md:flex items-center border border-gray-300 rounded-full p-1 focus-within:ring-1 focus-within:ring-[#082159] focus-within:border-transparent transition-all"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-6 py-3.5 bg-transparent border-0 rounded-full focus:outline-none text-base text-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3.5 bg-[#082159] text-white rounded-full font-medium hover:bg-opacity-90 hover:scale-105 transition-all duration-200 whitespace-nowrap text-base active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      {/* Mobile Layout */}
      <form
        onSubmit={handleSubmit}
        className="md:hidden flex flex-col gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-6 py-3.5 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#082159] focus:border-transparent transition-all text-base text-black bg-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full px-8 py-3.5 bg-[#082159] text-white rounded-full font-medium hover:bg-opacity-90 active:scale-95 transition-all duration-200 text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;
