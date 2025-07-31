//шляхи на фронтенді

export default {
  pages: {
    home: "/",
    about: "/about",
    pay: "/pay",
    contacts: "/contacts",
    products: {
      index: "/products",
      category: "category/:category",
      detail: "detail/:id",
    },
  },
  navigate: {
    products: {
      list: "/products",
      getCategory: (category) => `/products/category/${category}`,
      getDetail: (id) => `/products/detail/${id}`,
    },
  },
};
