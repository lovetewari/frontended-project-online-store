import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import formatPrice from "../utils/formatPrice";
import Loading from "../components/Loading";
import Error from "../components/Error";
import PageHero from "../components/PageHero";
import ProductImages from "../components/ProductImages";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id, fetchSingleProduct]); // Added 'fetchSingleProduct' to the dependency array

  if (singleProductLoading) {
    return <Loading />;
  }

  if (singleProductError) {
    return <Error />;
  }

  const {
    id: idProduct,
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    designer,
    images,
  } = singleProduct;

  return (
    <SingleProductContainer>
      <PageHero title={name} product />
      <div className="section section-center page">
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="description">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>Designed by: </span>
              {designer}
            </p>
            <p className="info">
              <span>Product id: </span>
              {idProduct}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </section>
        </div>
        <Link to="/products" className="btn">
          Back to products
        </Link>
      </div>
    </SingleProductContainer>
  );
};

const SingleProductContainer = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-bottom: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .description {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProduct;
