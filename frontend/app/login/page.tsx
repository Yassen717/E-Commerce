"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/utils/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.token);
      router.push("/profile");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-surface to-background">
      <div className="w-full max-w-md p-10 bg-white rounded-3xl shadow-card border border-surface">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-primary drop-shadow-sm">Login to Your Account</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-semibold text-text">Email</label>
            <input
              type="email"
              className="w-full border border-surface rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light text-text bg-surface"
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
              className="w-full border border-surface rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-light text-text bg-surface"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-600 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-xl font-semibold shadow-card hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-text">Don't have an account? <a href="/register" className="text-primary hover:underline">Register</a></p>
      </div>
    </div>
  );
} 