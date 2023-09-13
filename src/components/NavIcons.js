import React from "react";
import styled from "styled-components";
// Removed unused imports
import { useAuth0 } from "@auth0/auth0-react";

const NavIcons = () => {
  // Removed unused variables
  const { logout, user } = useAuth0();

  return (
    <NavIconContainer>
      {user && (
        <button
          type="button"
          className="auth-btn"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      )}
    </NavIconContainer>
  );
};

const NavIconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }
`;

export default NavIcons;
