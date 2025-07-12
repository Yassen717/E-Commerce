"use client";
import { useEffect, useState } from "react";
import { getProfile } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    getProfile(token)
      .then(data => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        localStorage.removeItem("token");
        router.push("/login");
      });
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-surface to-background">
        <div className="bg-white p-8 rounded-2xl shadow-card text-center border border-surface">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-surface to-background">
        <div className="bg-white p-8 rounded-2xl shadow-card text-center text-red-600 border border-red-200">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-surface to-background">
      <div className="bg-white p-10 rounded-3xl shadow-card w-full max-w-md flex flex-col items-center border border-surface">
        <div className="w-24 h-24 rounded-full bg-primary-light flex items-center justify-center mb-4">
          <span className="text-4xl text-primary font-bold">{user?.name?.charAt(0) || "U"}</span>
        </div>
        <h2 className="text-2xl font-extrabold mb-2 text-primary drop-shadow-sm">{user?.name}</h2>
        <div className="text-text mb-4">{user?.email}</div>
        <div className="mb-6 px-4 py-2 rounded bg-surface text-text font-bold inline-block border border-surface">
          {user?.isAdmin ? "Admin" : "Regular User"}
        </div>
        <button
          onClick={() => router.push("/products")}
          className="bg-primary text-white px-7 py-2 rounded-xl font-semibold shadow-card hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light"
        >
          Browse Products
        </button>
      </div>
    </div>
  );
} 