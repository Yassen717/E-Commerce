export async function loginUser(email: string, password: string) {
  const res = await fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'فشل تسجيل الدخول');
  }
  return res.json();
}

export async function getProfile(token: string) {
  const res = await fetch('http://localhost:5000/api/users/profile', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'فشل جلب البيانات');
  }
  return res.json();
}

export async function getProducts() {
  const res = await fetch('http://localhost:5000/api/products');
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'فشل جلب المنتجات');
  }
  return res.json();
}

export async function registerUser(name: string, email: string, password: string) {
  const res = await fetch('http://localhost:5000/api/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'فشل إنشاء الحساب');
  }
  return res.json();
} 