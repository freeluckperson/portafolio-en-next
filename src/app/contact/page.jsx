"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div
      className="text-center text-secondary d-flex align-items-center "
      style={{
        maxWidth: "360px",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
          reset();
        })}
      >
        <h1 className="fw-bold text-gray">
          <span className="text-warning ">C</span>
          <span className="text-primary ">o</span>
          <span className="text-danger ">n</span>
          <span className="text-info ">t</span>
          <span className="text-break ">a</span>
          <span className="text-warning-emphasis">c</span>
          <span className="text-danger ">t</span>
        </h1>

        <input
          className="form-control  mt-4"
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />

        <textarea
          className="form-control mt-4"
          name="message"
          {...register("message", { required: true })}
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="btn btn-outline-dark mt-4" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
