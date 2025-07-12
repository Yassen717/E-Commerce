"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/api";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await registerUser(name, email, password);
      setSuccess("Your account has been created successfully! You will be redirected to login...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-surface to-background">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl shadow-card border border-surface">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-accent drop-shadow-sm">Create a New Account</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold text-text">Full Name</label>
            <input
              type="text"
              className="w-full border border-surface rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-light text-text bg-surface"
              placeholder="Your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-text">Email</label>
            <input
              type="email"
              className="w-full border border-surface rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-light text-text bg-surface"
              placeholder="example@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-text">Password</label>
            <input
              type="password"
              className="w-full border border-surface rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-light text-text bg-surface"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          {success && <div className="text-accent text-sm text-center">{success}</div>}
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 rounded-xl font-semibold shadow-card hover:bg-accent-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <a
          href="/login"
          className="block w-full mt-4 text-center bg-surface text-accent border border-accent py-2 rounded-xl font-semibold shadow-card hover:bg-accent hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-light"
        >
          Already have an account? Login
        </a>
      </div>
    </div>
  );
} 