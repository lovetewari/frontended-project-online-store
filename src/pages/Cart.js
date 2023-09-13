import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import PageHero from "../components/PageHero";
import CartContent from "../components/CartContent";

const Cart = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main>
        <PageHero title="cart" />
        <CartContainer className="page">
          <div className="empty">
            <h2>Cart is empty</h2>
            <Link to="/products" className="btn">
              Add products
            </Link>
          </div>
        </CartContainer>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <CartContainer className="page">
        <CartContent />
      </CartContainer>
    </main>
  );
};

const CartContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 4rem;
      text-transform: none;
    }
  }
`;

export default Cart;
