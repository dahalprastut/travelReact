import React from "react";
import { connect } from "react-redux";
import {
  Formik,
  Form,
  Field,
  FormGroup,
} from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { dangerColor } from "../../constants/variables";
import { signUp } from "./../../redux/actions";

function FormData({
  signUpAction,
  error,
  loading,
  currentUser,
  history,
}) {
  let initial = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Name is too short")
      .max(20, "Name is too long")
      .required("Required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(8)
      .required("Required"),
    passwordConfirm: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        "Password not matched"
      )
      .required("Required"),
  });

  const submitHandler = (
    values,
    { resetForm }
  ) => {
    // console.log(values);
    signUpAction(values, history);
    resetForm();
  };

  const inputStyle = {
    height: "3.4rem",
    padding: "0 1rem",
    width: "100%",
    outline: 0,
    border: "none",
    boxShadow:
      "2px 2px 5px 1px rgba(197,195,195,0.71)",
  };

  const errorStyle = {
    color: dangerColor,
    marginTop: "0.5rem",
    fontSize: "1.2rem",
  };

  return (
    <Formik
      initialValues={initial}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <DivStyle>
            <Field
              style={inputStyle}
              name="name"
              type="text"
              placeholder="Full Name"
            />
            {errors.name && touched.name ? (
              <div style={errorStyle}>
                {errors.name}
              </div>
            ) : null}
          </DivStyle>

          <DivStyle>
            <Field
              style={inputStyle}
              name="email"
              type="text"
              placeholder="Email"
            />
            {errors.email && touched.email && (
              <div style={errorStyle}>
                {errors.email}
              </div>
            )}
          </DivStyle>
          <DivStyle>
            <Field
              style={inputStyle}
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password &&
              touched.password && (
                <div style={errorStyle}>
                  {errors.password}
                </div>
              )}
          </DivStyle>
          <DivStyle>
            <Field
              style={inputStyle}
              name="passwordConfirm"
              type="password"
              placeholder="Confrim Password"
            />
            {errors.passwordConfirm &&
              touched.passwordConfirm && (
                <div style={errorStyle}>
                  {errors.passwordConfirm}
                </div>
              )}
          </DivStyle>
          <DivStyle>
            <button type="submit">Submit</button>
          </DivStyle>
        </Form>
      )}
    </Formik>
  );
}

const DivStyle = styled.div`
  margin-top: 2rem;
  width: 50%;
`;

const LabelStyle = styled.label`
  margin-right: 1rem;
  font-size: 1.6rem;
`;

const mapStateToProps = ({ authReducer }) => {
  const { error, loading, currentUser } =
    authReducer;
  return { error, loading, currentUser };
};

export default connect(mapStateToProps, {
  signUpAction: signUp,
})(FormData);
