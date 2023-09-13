import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import formatPrice from "../utils/formatPrice";
import { useAuth0 } from "@auth0/auth0-react";
import { useCartContext } from "../context/cart_context";

const Checkout = () => {
  const { user } = useAuth0();
  const { cart, totalAmount, shippingFee, clearCart } = useCartContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
  };

  return (
    <main>
      <PageHero title="checkout" />
      <CheckoutContainer className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Cart is empty</h2>
            <Link to="/products" className="btn">
              Add products
            </Link>
          </div>
        ) : (
          <div>
            <article>
              <h4>Thank you for shopping with us, {user.name}</h4>
              <p>Your total is {formatPrice(totalAmount + shippingFee)}</p>
            </article>
            <form onSubmit={handleSubmit} className="center">
              <label htmlFor="payment">Choose the payment option:</label>
              <select name="payment" id="payment" className="payment-input">
                <option value="credit-card">Credit Card</option>
                <option value="ideal">Ideal</option>
                <option value="paypal">Paypal</option>
                <option value="klarna">Klarna</option>
              </select>
              <button className="center">Pay</button>
            </form>
          </div>
        )}
      </CheckoutContainer>
    </main>
  );
};

const CheckoutContainer = styled.main`
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
  form {
    width: 50vw;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }
  .center {
    margin: 0 auto;
  }
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 50%;
  }
  button:hover {
    filter: contrast(115%);
  }
  .payment-input {
    border-radius: 6px;
    margin-bottom: 6px;
    margin-left: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 40%;
    background: white;
    box-sizing: border-box;
  }
  label {
    font-size: 1rem;
  }
`;

export default Checkout;
