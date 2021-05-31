import React from "react";
import styled from "styled-components";
import Card from "../../components/Card.js";
import { primaryColor } from "./../../constants/variables";

export default function Plan() {
  return (
    <PlanStyle>
      <div className="center">
        <h2>Our Plan</h2>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </PlanStyle>
  );
}

const PlanStyle = styled.div`
  margin-top: 4rem;
  h2 {
    text-align: center;
  }
  .cards {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
  }
`;
