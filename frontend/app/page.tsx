import Image from "next/image";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white/90 p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full border border-blue-100">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700 drop-shadow">Welcome to Our E-Commerce Store</h1>
        <p className="mb-8 text-gray-600 text-lg">Start shopping now by logging in or creating a new account.</p>
        <div className="flex justify-center gap-4">
          <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition">Login</a>
          <a href="/register" className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition">Register</a>
        </div>
      </div>
    </div>
  );
}
