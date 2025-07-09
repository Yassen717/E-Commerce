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
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow text-center">جاري تحميل المنتجات...</div>
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
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">المنتجات</h1>
        {products.length === 0 ? (
          <div className="text-center text-gray-600">لا توجد منتجات متاحة حالياً.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product._id} className="bg-white rounded shadow p-4 flex flex-col items-center">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded" />
                <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                <div className="text-gray-600 mb-1">{product.category}</div>
                <div className="text-blue-600 font-bold">{product.price} ج.م</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 