import React from "react";

import styled from "styled-components";
import Navigation from "../../components/navigation";
import Footer from "./../../components/footer";
import Plan from "./../../containers/user/plan";
import About from "./../../containers/user/about";

export default function HomeUser() {
  return (
    <div className="Home">
      <Navigation />
      <Banner>
        <div className="center">
          <h1>Welcome. Feel free to explore.</h1>
        </div>
      </Banner>

      <Plan />

      <About />
      <Footer />
    </div>
  );
}

const Banner = styled.div`
  height: 40rem;
  width: 100%;
  overflow: hidden;
  background: url("./images/background.jpg")
    center center fixed;
  .center {
    display: flex;
    align-items: center;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
