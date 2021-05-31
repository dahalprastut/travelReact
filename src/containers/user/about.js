import React from "react";
import styled from "styled-components";
import { secondaryBgColor } from "./../../constants/variables";

export default function About() {
  return (
    <AboutStyle>
      <div className="center">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deleniti minima
          quaerat architecto minus eveniet non,
          voluptate molestias praesentium
          dignissimos veritatis incidunt dolores
          sequi vitae alias voluptatum ipsum.
          Consequuntur voluptas praesentium quam!
          Iusto minus blanditiis optio ipsam fuga
          nisi facere exercitationem.
        </p>
      </div>
    </AboutStyle>
  );
}

const AboutStyle = styled.div`
  margin-top: 4rem;
  background: ${secondaryBgColor};
  text-align: center;
  padding: 4rem 0;

  p {
    margin-top: 2rem;
  }
`;
