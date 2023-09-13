import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import brush from "../assets/brush-stroke-banner-6.svg";

const Hero = () => {
  return (
    <HeroContainer className="section-center">
      <article className="content">
        <h1>
          <span className="highlight">Handcrafted</span> <br />
          <span className="highlight">With Care</span>
        </h1>
        <p>
  Welcome to the House of <a href="https://www.blacksmithatticus.com/#/" target="_blank" rel="noopener noreferrer" className="fancy-text">Blacksmithatics</a> and <a href="https://graphicseating.wixsite.com/graphic" target="_blank" rel="noopener noreferrer" className="fancy-text">Graphic</a>.
</p>

        <Link to="/products" className="btn hero-btn">
          Explore catlouges
        </Link>
      </article>
      <article className="small-hero">
        <img src={brush} alt="paint brush" className="svg" />
      </article>
      <article className="img-container">
        <img src={hero} alt="hero background" className="main-img" />
      </article>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  position: relative;

  .content {
    text-align: center;
  }

  .highlight {
    font-size: 2.8rem;
    font-weight: 800;
    color: var(--clr-primary-9);
    line-height: 1.2;
  }

  .fancy-text {
    background-color: var(--clr-primary-9);
    color: #ffffff;
    padding: 0.2rem 0.5rem;
    border-radius: var(--radius);
    transition: background-color 0.3s ease;
    font-weight: bold;
  }

  .fancy-text:hover {
    background-color: var(--clr-primary-7);
  }

  h1 {
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 2.5rem;
    max-width: 45em;
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.8;
  }

  .hero-btn {
    margin-top: 1.5rem;
    padding: 1rem 2rem;
    background-color: var(--clr-primary-9);
    color: #fff;
    border: none;
    border-radius: var(--radius);
    font-size: 1.25rem;
    transition: background-color 0.3s ease;
  }

  .hero-btn:hover {
    background-color: var(--clr-primary-7);
  }

  .small-hero {
    z-index: -1;
    position: absolute;
    color: var(--clr-primary-9);
    overflow: hidden;
  }

  .svg {
    min-height: 500px;
    max-width: calc(100vw - 0.1rem);
  }

  .img-container {
    display: none;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }

    p {
      font-size: 1.25rem;
    }

    .hero-btn {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
    }

    .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      display: block;
      position: relative;
      width: 100%;
      height: 550px;
      object-fit: cover;
      border-radius: var(--radius);
    }

    .img-container::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: -8%;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      border-radius: var(--radius);
    }

    .small-hero {
      display: none;
    }
  }
`;

export default Hero;
