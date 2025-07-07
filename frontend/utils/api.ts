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