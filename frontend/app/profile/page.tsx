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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white/90 p-8 rounded-2xl shadow text-center border border-blue-100">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white/90 p-8 rounded-2xl shadow text-center text-red-600 border border-red-100">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white/90 p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center border border-blue-100">
        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <span className="text-4xl text-blue-600 font-bold">{user?.name?.charAt(0) || "U"}</span>
        </div>
        <h2 className="text-2xl font-extrabold mb-2 text-blue-700 drop-shadow">{user?.name}</h2>
        <div className="text-gray-600 mb-4">{user?.email}</div>
        <div className="mb-6 px-4 py-2 rounded bg-gray-50 text-gray-900 font-bold inline-block border border-gray-200">
          {user?.isAdmin ? "Admin" : "Regular User"}
        </div>
        <button
          onClick={() => router.push("/products")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Browse Products
        </button>
      </div>
    </div>
  );
} 