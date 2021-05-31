import React from "react";
import styled from "styled-components";

export default function Card() {
  return (
    <CardDesign>
      <div className="upper-image">
        <img src="./images/dog.png" alt="" />
      </div>
      <div className="des">
        <p>
          Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptates
          voluptatibus assumenda, dolorum minima
          ratione facere excepturi quasi
          dignissimos accusamus nulla odio quam
          vitae totam magnam sunt soluta in saepe
          repellat.
        </p>
      </div>
    </CardDesign>
  );
}

const CardDesign = styled.div`
  width: 32%;
  .upper-image {
    height: 20rem;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .des {
    margin-top: 1.5rem;
  }
`;
