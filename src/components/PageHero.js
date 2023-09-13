import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <PageHeroContainer>
      <div className="section-center">
        <h3>
          {product && (
            <Link to="/products" className="link">
              /Products
            </Link>
          )}
          /{title}
        </h3>
      </div>
    </PageHeroContainer>
  );
};

const PageHeroContainer = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-4);
  .link {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
