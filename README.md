# React + Vite
# 🛍️ React Shop App (HW07)

This project is a learning-oriented React application simulating an online store. It features product categories, product listings by category, and detailed product pages.

## 🔧 Technologies Used

- React 18
- React Router DOM
- SCSS (module-based styling)
- Vite
- Custom React hook (`useFetch`)
- API: [https://dummyjson.com](https://dummyjson.com)

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/NataliiaVareniuk/React2025.git
cd React2025
git checkout HW07
2. Install Dependencies
bash
npm install
or

bash
yarn install
3. Start the Development Server
bash
npm run dev
or

bash
yarn dev
Then open http://localhost:5173 in your browser.

🧭 Routes
/ — Home page

/products — Category selection

/products/category/:category — Product list by category

/products/detail/:id — Product detail page

/about, /pay, /contacts — Static info pages

📁 Project Structure
cpp
src/
├── components/
│   └── pages/
│       └── products/
│           ├── ProductList.jsx
│           ├── ProductCard.jsx
│           ├── ProductDetails.jsx
│           ├── ProductCategories.jsx
│           └── Product.module.scss
├── api/
│   └── apiRoutes.js
├── utils/
│   └── hooks/
│       └── useFetch.js
├── routes/
│   └── frontRoutes.js
├── Layout/
│   └── Layout.jsx
└── AppRoutes.jsx
📌 Homework HW07 Goals
✅ Select category
✅ Display products by category
✅ Product detail page
✅ Navigate back to product list
✅ Use custom useFetch hook
✅ SCSS module-based styling
✅ Dynamic routing with React Router

🧑‍💻 Author
Nataliia Vareniuk

GitHub Profile

📄 License
This project is for educational purposes only.
