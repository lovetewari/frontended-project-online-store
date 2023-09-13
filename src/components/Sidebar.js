import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo-black.svg";
import { links } from "../utils/constants";
import NavIcons from "./NavIcons";
import { useProductsContext } from "../context/products_context";
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { sidebarOpen, closeSidebar } = useProductsContext();
  const { user } = useAuth0();

  return (
    <SidebarContainer>
      <aside className={`${sidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <MdClose />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, text, url } = link;

            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to="/checkout" onClick={closeSidebar}>
                Checkout
              </Link>
            </li>
          )}
        </ul>
        <NavIcons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.5rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 65%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
    box-shadow: 2px 0 5px -2px #888;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .nav-icon-container {
    margin: 3rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
