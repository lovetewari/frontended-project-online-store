import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import image from "../assets/about_us.gif";

const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <AboutContainer className="page section section-center">
        <img src={image} alt="light room" />
        <article>
          <div className="title">
            <h2>Our team</h2>
            <div className="underline"></div>
            <p>
            Welcome to our website! We take pride in offering the highest quality products to our valued customers. With a focus on excellence, we strive to provide you with nothing but the best.

we understand the importance of customer satisfaction. That's why our dedicated team is always ready to assist you and address any concerns or queries you may have. We believe in building strong relationships with our customers and ensuring that their needs are met.

Our commitment to quality is unwavering. We meticulously source and curate products that meet the highest standards, ensuring that you receive only the finest merchandise. We understand that you deserve nothing less.

We invite you to explore our extensive range of products. Whether you're looking for [specific category of products], [specific category of products], or [specific category of products], we have you covered. Our diverse selection caters to a wide range of tastes and preferences.

Should you need any assistance or have any questions, our friendly customer support team is just a click or call away. We value your feedback and are always striving to improve your experience with us.

Thank you for choosing us. We look forward to serving you and providing you with the best quality products and exceptional customer service.
            </p>
          </div>
        </article>
      </AboutContainer>
    </main>
  );
};

const AboutContainer = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
