"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/utils/api";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="bg-white/90 p-8 rounded-2xl shadow text-center border border-blue-100">Loading products...</div>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700 drop-shadow">Products</h1>
        {products.length === 0 ? (
          <div className="text-center text-gray-700">No products available at the moment.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product._id} className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100 hover:shadow-2xl transition">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-xl border border-gray-200" />
                <h2 className="text-lg font-bold mb-1 text-gray-900 text-center">{product.name}</h2>
                <div className="text-gray-500 mb-1 text-sm">{product.category}</div>
                <div className="text-blue-600 font-bold text-lg">{product.price} EGP</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 