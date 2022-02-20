import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAxios from "../../../hooks/useAxios";
import Heading from "../Heading";

const schema = yup.object().shape({
  hotelName: yup.string().required("Adding a name is required."),
  description: yup.string().required("Adding a description is required."),
  price: yup.number().required("Adding a price is required."),
});

export default function Add() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();
  const http = useAxios();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);

    data.status = "publish";

    console.log(data);

    try {
      const response = await http.post("/hotels", data);
      console.log("response", response.data);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Heading title="Add new hotel" />

      <div className="container__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          {serverError}
          <input
            className="form__input form__input--add"
            name="hotelName"
            placeholder="Hotel Name"
            {...register("hotelName")}
          />
          {/* {errors.hotelName && <div>{errors.hotelName.message}</div>} */}
          <input
            className="form__input form__input--add"
            name="price"
            placeholder="Price"
            {...register("price")}
          />
          {/* {errors.price && <div>{errors.price.message}</div>} */}
          <textarea
            className="form__input form__input--add"
            name="description"
            placeholder="Description"
            {...register("description")}
          />
          {/* {errors.description && <div>{errors.description.message}</div>} */}
          <button className="button__form button__form--add">
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}
