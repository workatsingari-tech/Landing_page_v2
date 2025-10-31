import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import * as XLSX from "xlsx";
import { ArrowDown } from "revoicons";

// Environment variables for login
const DASHBOARD_USER = import.meta.env.VITE_DASHBOARD_USER;
const DASHBOARD_PASS = import.meta.env.VITE_DASHBOARD_PASS;

// Supabase configuration — same as your EmailSignup component
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Lazy import for Supabase client
const createClient = async () => {
  const { createClient } = await import("@supabase/supabase-js");
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};

interface Registration {
  id: number;
  email: string;
  created_at?: string;
}

const Dashboard: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [creds, setCreds] = useState({ username: "", password: "" });

  // --- LOGIN HANDLER ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      creds.username === DASHBOARD_USER &&
      creds.password === DASHBOARD_PASS
    ) {
      localStorage.setItem("auth", "true");
      setAuthorized(true);
      toast.success("Welcome back!");
    } else {
      toast.error("Invalid username or password");
    }
  };

  // --- CHECK AUTH ON LOAD ---
  useEffect(() => {
    const loggedIn = localStorage.getItem("auth") === "true";
    if (loggedIn) setAuthorized(true);
  }, []);

  // --- FETCH REGISTRATIONS ---
  useEffect(() => {
    if (!authorized) return;

    const fetchData = async () => {
      try {
        const supabase = await createClient();
        const { data, error } = await supabase
          .from("mailing_list")
          .select("id, email, created_at")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setRegistrations(data || []);
      } catch (err) {
        console.error("Error fetching registrations:", err);
        toast.error("Failed to fetch registrations");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authorized]);

  // --- DOWNLOAD HANDLER ---
  const handleDownload = () => {
    if (!registrations.length) {
      toast.error("No registrations to download");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(
      registrations.map((r, i) => ({
        Index: i + 1,
        Email: r.email,
        "Registered On": r.created_at
          ? new Date(r.created_at).toLocaleString()
          : "-",
      }))
    );

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
    XLSX.writeFile(workbook, "registrations.xlsx");

    toast.success("Downloaded registrations.xlsx");
  };

  // --- LOGIN SCREEN ---
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center font-satoshi">
            Admin Login
          </h2>
          <input
            type="text"
            placeholder="Username"
            value={creds.username}
            onChange={(e) => setCreds({ ...creds, username: e.target.value })}
            className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-1 focus:ring-[#082159] focus:border-transparent outline-none bg-white text-black font-satoshi"
          />
          <input
            type="password"
            placeholder="Password"
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
            className="w-full mb-4 px-4 py-2 border rounded-md focus:ring-1 focus:ring-[#082159] focus:border-transparent outline-nonefont-satoshi bg-white text-black"
          />
          <button
            type="submit"
            className="w-full bg-[#082159] text-white py-2.5 rounded-md font-medium hover:bg-opacity-90 active:scale-95 transition-all font-satoshi"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  // --- MAIN DASHBOARD ---
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Header section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 font-satoshi">
          Registrations
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mt-3 md:mt-0">
          <p className="text-gray-600 font-satoshi">
            Total: <span className="font-semibold">{registrations.length}</span>
          </p>
          <button
            onClick={handleDownload}
            className="p-2 bg-[#082159] text-white rounded-full font-medium hover:bg-opacity-90 active:scale-95 transition-all duration-200 text-sm md:text-base font-satoshi"
          >
            <ArrowDown size={16} />
          </button>
        </div>
      </div>

      {/* Table section */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-gray-700 font-medium w-16 font-satoshi">
                  #
                </th>
                <th className="px-4 py-3 text-gray-700 font-medium font-satoshi">
                  Email
                </th>
                <th className="px-4 py-3 text-gray-700 font-medium hidden md:table-cell font-satoshi">
                  Registered On
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    Loading...
                  </td>
                </tr>
              ) : registrations.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No registrations yet
                  </td>
                </tr>
              ) : (
                registrations.map((reg, i) => (
                  <tr
                    key={reg.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-gray-700">{i + 1}</td>
                    <td className="px-4 py-3 text-gray-800 break-all">
                      {reg.email}
                    </td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                      {reg.created_at
                        ? new Date(reg.created_at).toLocaleString()
                        : "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
