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
      <div className="bg-white p-8 rounded shadow text-center">
        <h2 className="text-2xl font-bold mb-2 text-black">الملف الشخصي</h2>
        <div className="mt-4 space-y-2">
          <div><span className="font-bold text-black">الاسم:</span> {user?.name}</div>
          <div><span className="font-bold text-black">البريد الإلكتروني:</span> {user?.email}</div>
          <div><span className="font-bold text-black">الصلاحية:</span> {user?.isAdmin ? "مدير" : "مستخدم عادي"}</div>
        </div>
      </div>
    </div>
  );
} 