import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((item) => item.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            let newAmount = cartItem.amount + amount;

            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item) => item.id !== action.payload);

      return { ...state, cart: tempCart };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case TOGGLE_CART_ITEM_AMOUNT:
      const { id: itemId, value } = action.payload;
      const temporaryCart = state.cart.map((item) => {
        if (item.id === itemId) {
          if (value === "increase") {
            let newAmount = item.amount + 1;

            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          }
          if (value === "decrease") {
            let newAmount = item.amount - 1;

            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          } else {
            return { ...item };
          }
        } else {
          return item;
        }
      });
      return { ...state, cart: temporaryCart };
    case COUNT_CART_TOTALS:
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;

          total.totalItems += amount;
          total.totalAmount += price * amount;

          return total;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItems, totalAmount };
    default:
      throw new Error(`"${action.type}" doesn't match action type`);
  }
};

export default cart_reducer;
