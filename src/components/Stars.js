import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const iconStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <StarsContainer>
      <div className="stars">{iconStars}</div>
      <p className="reviews">
        from <span className="text">{reviews}</span>reviews
      </p>
    </StarsContainer>
  );
};

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  .text {
    color: var(--clr-primary-5);
    font-weight: bold;
  }
  margin-bottom: 0.5rem;
`;

export default Stars;
