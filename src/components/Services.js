import React from "react";
import styled from "styled-components";
import { HiColorSwatch, HiBookOpen, HiBadgeCheck, HiEye } from "react-icons/hi";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="section-center">
        <article className="header">
          <h3>More about our company</h3>
        </article>
        <div className="services-center">
          <article className="service">
            <span className="icon">
              <HiBadgeCheck />
            </span>
            <h4>Mission</h4>
            <p>
              Comfort is Our Priority.
            </p>
          </article>
          <article className="service">
            <span className="icon">
              <HiEye />
            </span>
            <h4>Vision</h4>
            <p>
              Make the Dream Furniture True For All.
            </p>
          </article>
          <article className="service">
            <span className="icon">
              <HiBookOpen />
            </span>
            <h4>History</h4>
            <p>
              We Care for all Deliveries even our Smallest order value Products are given High Priority.
            </p>
          </article>
          <article className="service">
            <span className="icon">
              <HiColorSwatch />
            </span>
            <h4>Designers</h4>
            <p>We Think You Decide and Make That Happen.</p>
          </article>
        </div>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  background: var(--clr-primary-10);
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-8);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default Services;
