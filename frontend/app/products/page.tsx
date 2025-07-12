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
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-surface to-background">
        <div className="bg-white p-8 rounded-2xl shadow-card text-center border border-surface">Loading products...</div>
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
    <div className="min-h-screen bg-gradient-to-br from-surface to-background py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-primary drop-shadow-sm">Products</h1>
        {products.length === 0 ? (
          <div className="text-center text-text">No products available at the moment.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <div key={product._id} className="bg-white rounded-2xl shadow-card p-6 flex flex-col items-center border border-surface hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-4 rounded-xl border border-surface" />
                <h2 className="text-lg font-bold mb-1 text-text text-center">{product.name}</h2>
                <div className="text-secondary mb-1 text-sm">{product.category}</div>
                <div className="text-primary font-bold text-lg">{product.price} EGP</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 