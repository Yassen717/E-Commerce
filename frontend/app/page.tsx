import Image from "next/image";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">مرحبا بك في متجرنا الإلكتروني</h1>
        <p className="mb-6 text-gray-600">ابدأ الآن بتسجيل الدخول أو إنشاء حساب جديد.</p>
        <div className="flex justify-center gap-4">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">تسجيل الدخول</a>
          <a href="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">تسجيل جديد</a>
        </div>
      </div>
    </div>
  );
}
