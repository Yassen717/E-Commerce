import Image from "next/image";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-surface to-background">
      <div className="bg-white p-12 rounded-3xl shadow-card text-center max-w-lg w-full border border-surface">
        <h1 className="text-4xl font-extrabold mb-4 text-primary drop-shadow-sm">Welcome to Our E-Commerce Store</h1>
        <p className="mb-8 text-text text-lg">Start shopping now by logging in or creating a new account.</p>
        <div className="flex  flex-col gap-3 mt-8">
        <a href="/login" className="w-full bg-white text-blue-600 py-2 rounded-xl font-semibold border border-blue-600 shadow hover:bg-blue-50 transition-colors text-center">
  Login
</a>

<a href="/register" className="w-full bg-white text-pink-500 py-2 rounded-xl font-semibold border border-pink-500 shadow hover:bg-pink-50 transition-colors text-center">
  Register
</a>


        </div>
      </div>
    </div>
  );
}
