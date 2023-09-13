import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/filter_context";
import formatPrice from "../utils/formatPrice";
import getUniqueValues from "../utils/getUniqueValues";

const Filters = () => {
  const {
    filters: {
      searchText,
      designer,
      color,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const designers = getUniqueValues(allProducts, "designer");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <FiltersContainer>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              name="searchText"
              placeholder="Search"
              className="search-input"
              value={searchText}
              onChange={updateFilters}
            />
          </div>
          <div className="form-control">
            <h5>Designer</h5>
            <div>
              {designers.map((des, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="designer"
                    type="button"
                    className={`${designer === des ? "active" : null}`}
                  >
                    {des}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }

                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
              step={1000}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </FiltersContainer>
  );
};

const FiltersContainer = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
  .colors {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.6rem;
      color: var(--clr-white);
    }
  }
`;

export default Filters;
