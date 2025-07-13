# E-Commerce Project

## 🛍️ Overview
A full-stack E-Commerce application built with Next.js frontend and Express.js backend, featuring user authentication, product management, and a modern responsive UI.

---

## 🚀 Tech Stack
| Part      | Technology                |
|-----------|---------------------------|
| Frontend  | Next.js 15.3.4, React 19, TypeScript, Tailwind CSS 4 |
| Backend   | Node.js, Express.js, Mongoose |
| Database  | MongoDB                   |
| Auth      | JWT (JSON Web Tokens)     |
| Styling   | Tailwind CSS 4 with PostCSS |

---

## 📁 Project Structure
```
E-Commerce/
├── frontend/                 # Next.js Frontend
│   ├── app/                 # App Router (Next.js 13+)
│   │   ├── login/          # Login page
│   │   ├── register/       # Registration page
│   │   ├── products/       # Products listing page
│   │   ├── profile/        # User profile page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── public/             # Static assets
│   ├── utils/              # Utility functions
│   └── package.json        # Frontend dependencies
├── backend/                 # Express.js Backend
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── seed.js             # Database seeding
│   └── index.js            # Server entry point
└── README.md               # This file
```

---

## 📝 Features

### ✅ Implemented Features
- **User Authentication**: JWT-based login/register system
- **User Management**: User profiles with admin roles
- **Product Management**: CRUD operations for products
- **Database Models**: User and Product schemas with MongoDB
- **API Endpoints**: RESTful API for users and products
- **Modern UI**: Responsive design with Tailwind CSS 4
- **TypeScript**: Type-safe development environment

### 🔄 In Progress / Planned Features
- Shopping cart functionality
- Order management system
- Admin dashboard
- Product search and filtering
- Image upload (Cloudinary integration)
- Payment processing

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js >= 18
- MongoDB (local or cloud)
- Git

### 1. Clone the repository
```bash
git clone <repo-url>
cd E-Commerce
```

### 2. Install dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd ../backend
npm install
```

### 3. Environment Variables

#### Backend (.env)
Create a `.env` file in the `backend` directory:
```env
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_here
PORT=5000
NODE_ENV=development
```

#### Frontend (.env.local) - Optional
Create a `.env.local` file in the `frontend` directory if needed:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 4. Database Setup
```bash
cd backend
node seed.js
```

### 5. Run the project

#### Backend (Terminal 1)
```bash
cd backend
npm run dev
```
Server will run on: http://localhost:5000

#### Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend will run on: http://localhost:3000

---

## 🗄️ Database Schema

### User Model
- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required, hashed)
- `isAdmin`: Boolean (default: false)
- `timestamps`: Created/updated timestamps

### Product Model
- `name`: String (required)
- `description`: String (required)
- `price`: Number (required, default: 0)
- `image`: String (required)
- `category`: String (required)
- `countInStock`: Number (required, default: 0)
- `user`: ObjectId (reference to User, required)
- `timestamps`: Created/updated timestamps

---

## 🔗 API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product (admin only)
- `GET /api/products/:id` - Get single product
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

---

## 🛠️ Development

### Available Scripts

#### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

#### Backend
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
```

### Code Quality
- ESLint configuration for both frontend and backend
- TypeScript for type safety
- Prettier for code formatting (recommended)

---

## 📸 Screenshots
_Add screenshots of the UI here once the application is running._

---

## 🔗 Useful Links
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

---

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License
This project is licensed under the MIT License.

---

## 📬 Contact
_Your contact info here_ 