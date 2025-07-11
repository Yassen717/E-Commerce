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
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow text-center">جاري التحميل...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
          <span className="text-4xl text-blue-600 font-bold">{user?.name?.charAt(0) || "U"}</span>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-black">{user?.name}</h2>
        <div className="text-gray-600 mb-4">{user?.email}</div>
        <div className="mb-6 px-4 py-2 rounded bg-gray-50 text-black font-bold inline-block">
          {user?.isAdmin ? "مدير" : "مستخدم عادي"}
        </div>
        <button
          onClick={() => router.push("/products")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-bold"
        >
          تصفح المنتجات
        </button>
      </div>
    </div>
  );
} 