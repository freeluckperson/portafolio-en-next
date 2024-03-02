"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import st from "./page.module.css";
import Image from "next/image";
import { Skills, Portfolio } from "../components/index.js";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <>
      <section
        className="container d-flex justify-content-end"
        style={{ marginTop: "90px", textAlign: "justify", textIndent: "3em" }}
      >
        <div className="w-75">
          <h1>
            <span className="bg-dark-subtle text-white">
              Achieving perfection in design is not about adding more,
            </span>{" "}
            but about refining and distilling the design until it reaches its
            most essential and impactful form.
          </h1>
          <div>
            <strong>Clarity</strong>
          </div>
        </div>
      </section>

      <div className="container card bg-dark-subtle my-5">
        <img src="/prog.png" className="card-img" alt="..." height={600} />
        <div className="card-img-overlay">
          <h5 className="card-title d-none">Card title</h5>
          <p className="card-text d-none">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text d-none">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      <section style={{ marginTop: "250px" }}>
        <Skills />
      </section>

      <section style={{ marginTop: "250px" }}>
        <Portfolio />
      </section>
    </>
  );
}
