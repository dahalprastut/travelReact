import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import FormData from "../../containers/user/signupForm";
import MainLeft from "../../containers/user/mainLeft";
import { getUsers } from "./../../redux/actions";

function SignUp({
  getUsersAction,
  error,
  loading,
  users,
  history,
}) {
  useEffect(() => {
    getUsersAction();
  }, []);
  return (
    <div className="signupPage">
      <Navigation />
      <SignupMainStyled>
        <MainLeft />
        <div className="login-main__right">
          <h2>SignUp</h2>
          <FormData history={history} />
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

const mapStateToProps = ({ authReducer }) => {
  const { error, loading, users } = authReducer;
  return { error, loading, users };
};

export default connect(mapStateToProps, {
  getUsersAction: getUsers,
})(SignUp);
