import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice },
      };
    case SET_GRID_VIEW:
      return { ...state, gridView: true };
    case SET_LIST_VIEW:
      return { ...state, gridView: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProducts = [...filteredProducts];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return { ...state, filteredProducts: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;

      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const { searchText, designer, color, price, shipping } = state.filters;
      let tempoProducts = [...allProducts];

      if (searchText) {
        tempoProducts = tempoProducts.filter((product) =>
          product.name.toLowerCase().includes(searchText)
        );
      }

      if (designer !== "all") {
        tempoProducts = tempoProducts.filter(
          (product) => product.designer === designer
        );
      }

      if (color !== "all") {
        tempoProducts = tempoProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      tempoProducts = tempoProducts.filter((product) => product.price <= price);

      if (shipping) {
        tempoProducts = tempoProducts.filter(
          (product) => product.shipping === true
        );
      }

      return { ...state, filteredProducts: tempoProducts };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          searchText: "",
          designer: "all",
          color: "all",
          price: state.filters.maxPrice,
          shipping: false,
        },
      };
    default:
      throw new Error(`"${action.type}" doesn't match action type`);
  }
};

export default filter_reducer;
