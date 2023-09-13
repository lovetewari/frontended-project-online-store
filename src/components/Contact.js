import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    axios({
      method: "POST",
      url: "https://formspree.io/f/xknpaqgw",
      data: new FormData(form),
    })
      .then((response) => {
        if (response.status === 200) {
          form.reset();
          setStatus("SUCCESS");
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus("ERROR");
      });

    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <ContactContainer>
      <div className="section-center">
        <h3>Sign up for our newsletter</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            nam laboriosam quod tempore nulla, veniam 20% off! Doloribus soluta
            debitis at atque delectus autem?
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-input"
              placeholder="Enter email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">
              Subscribe
            </button>
            {status === "SUCCESS" && (
              <span className="message">Thank you for subscribing!</span>
            )}
            {status === "ERROR" && (
              <span className="message">
                Something went wrong! Try again later.
              </span>
            )}
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};

const ContactContainer = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .message {
    color: var(--clr-primary-3);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-6);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
