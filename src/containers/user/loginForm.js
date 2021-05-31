import React from "react";
import {
  Formik,
  Form,
  Field,
  FormGroup,
} from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { dangerColor } from "../../constants/variables";

export default function FormData() {
  let initial = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    password: Yup.string()
      .min(8)
      .required("Required"),
  });

  const submitHandler = (
    values,
    { resetForm }
  ) => {
    // console.log(values);
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
