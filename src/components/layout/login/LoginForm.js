import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL, API_URL } from "../../../constants/api";

const url = BASE_URL + "/auth/local";

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address."),
  password: yup.string().required("Please enter your password."),
});

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    // const { loginData } = await axios.post(API_URL, {
    //   identifier: "admin@admin.com",
    //   password: "Password123",
    // });

    // console.log(loginData);

    try {
      await axios.post(url, data);
      navigate("/admin");
    } catch (error) {
      console.log("Error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form className="container__form" onSubmit={handleSubmit(onSubmit)}>
      {loginError && <span className="error">{loginError}</span>}
      {/* <Form.Group className="mb-3" controlId="identifier">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("identifier")}
        />
      </Form.Group> */}
      <label>Email</label>
      <input name="identifier" {...register("identifier")} />
      {errors.emaul && <span className="error">{errors.email.message}</span>}

      {/* <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
      </Form.Group> */}

      <label>Password</label>
      <input name="password" {...register("password")} type="password" />
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <button>{submitting ? "Logging in..." : "Log in"}</button>
    </Form>
  );
}

export default LoginForm;
