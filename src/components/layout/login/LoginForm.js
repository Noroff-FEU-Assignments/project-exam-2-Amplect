import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../../constants/api";
import AuthContext from "../../../context/AuthContext";

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

  const [, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
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

      <label>Email</label>
      <input
        className="form__input form__input--login"
        name="identifier"
        {...register("identifier")}
      />
      {errors.emaul && <span className="error">{errors.email.message}</span>}

      <label>Password</label>
      <input
        className="form__input form__input--login"
        name="password"
        {...register("password")}
        type="password"
      />
      {errors.password && (
        <span className="error">{errors.password.message}</span>
      )}

      <button className="button__form button__form--login">
        {submitting ? "Logging in..." : "Log in"}
      </button>
    </Form>
  );
}

export default LoginForm;
