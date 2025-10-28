import React, { useState } from "react";
import { toast } from "sonner";

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    // Simulate API success/failure
    setTimeout(() => {
      const isSuccess = Math.random() > 0.3;
      if (isSuccess) {
        toast.success("You're on the waitlist! 🎉");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      setLoading(false);
    }, 1200);
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
