import React, { useEffect } from "react";
import styled from "styled-components";
import { NotificationManager } from "react-notifications";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import FormData from "../../containers/user/loginForm";
import MainLeft from "../../containers/user/mainLeft";

export default function Login({ location }) {
  useEffect(() => {
    {
      if (location.state) {
        NotificationManager.warning(
          "Please login to continue to dashboard",
          "",
          2000
        );
      }
    }
  }, []);
  return (
    <div className="loginPage">
      <Navigation />
      <SignupMainStyled>
        <MainLeft />
        <div className="login-main__right">
          <h2>Login</h2>
          <FormData />
        </div>
      </SignupMainStyled>
      <Footer />
    </div>
  );
}

const SignupMainStyled = styled.div`
  height: 50rem;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 4.2rem;
    }
  }

  .login-main__right {
    padding-left: 10rem;
  }
`;
