import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo-black.svg";
import { links } from "../utils/constants";
import NavIcons from "./NavIcons";
import { useProductsContext } from "../context/products_context";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { user } = useAuth0();

  return (
    <NavContainer>
      <NavCenter>
        <NavHeader>
          <Link to="/">
            <Logo src={logo} alt="Furniture Store Logo" />
          </Link>
          <NavToggle onClick={openSidebar}>
            <FaBars />
          </NavToggle>
        </NavHeader>
        <NavLinks>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <NavLink to={url}>{text}</NavLink>
            </li>
          ))}
          {user && (
            <li>
              <NavLink to="/checkout">Checkout</NavLink>
            </li>
          )}
        </NavLinks>
        <NavIcons />
      </NavCenter>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 175px;
  margin-left: -15px;
`;

const NavToggle = styled.button`
  background: transparent;
  border: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;

  svg {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    justify-content: center;

    li {
      margin: 0 0.5rem;
    }
  }
`;

const NavLink = styled(Link)`
  color: var(--clr-grey-3);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  padding: 0.5rem;

  &:hover {
    border-bottom: 2px solid var(--clr-primary-7);
  }

  @media (min-width: 992px) {
    display: block;
  }
`;

export default Navbar;
