import React from "react";
import styled from "styled-components";
import {
  primaryColor,
  defaultColor,
} from "./../constants/variables";

export default function Footer() {
  return (
    <FooterStyle>
      <div className="center">
        <p>
          Feel free to copy. No copyright issues!
        </p>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  background: ${primaryColor};
  text-align: center;
  padding: 2rem 0;
  p {
    color: ${defaultColor};
  }
`;
