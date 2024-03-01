"use client";

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import st from "./page.module.css";
import Image from "next/image";

const imgs = [
  "/js.svg",
  "/ts.svg",
  "/jest.svg",
  "/mongo.svg",
  "/bootstrap.svg",
  "node.svg",
  "/github.svg",
  "/react.svg",
  "/docker.svg",
  "/zod.svg",
  "/jwt.svg",
  "/next2.svg",
];

function Card() {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        {imgs.map((img) => (
          <div key={img} className="col-md-3 mb-4 ">
            <div className="card h-100 border-1">
              <Image
                className=" card-img-bottom   "
                src={img}
                alt="..."
                height={80}
                width={80}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div
      className="container"
      style={{ marginTop: "90px", textAlign: "justify", textIndent: "3em" }}
    >
      <div>
        <h1>
          <span className="bg-dark-subtle text-white">Skills that give</span>{" "}
          <span className="text-primary">color</span> to my world.
        </h1>
      </div>
      <Card />
    </div>
  );
}

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
      <Skills />
    </>
  );
}
