import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  primaryColor,
  defaultColor,
} from "../constants/variables";

export default function Navigation() {
  return (
    <NavStyled>
      <div className="center">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  background: ${primaryColor};
  .center {
    display: flex;
    justify-content: flex-end;
  }

  ul {
    display: flex;

    li {
      margin-left: 2rem;

      a {
        display: block;
        text-decoration: none;
        color: ${defaultColor};
        font-size: 1.6rem;
        height: 4rem;
        line-height: 4rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
