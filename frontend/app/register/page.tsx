export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">تسجيل حساب جديد</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-bold text-black">الاسم</label>
            <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" placeholder="اسمك الكامل" />
          </div>
          <div>
            <label className="block mb-1 font-bold text-black">البريد الإلكتروني</label>
            <input type="email" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" placeholder="example@email.com" />
          </div>
          <div>
            <label className="block mb-1 font-bold text-black">كلمة المرور</label>
            <input type="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">تسجيل</button>
        </form>
        <p className="mt-4 text-center text-sm text-black">لديك حساب بالفعل؟ <a href="/login" className="text-blue-600 hover:underline">سجّل الدخول</a></p>
      </div>
    </div>
  );
} 