"use client";

import { useEffect, useState } from "react";

function Card({ project }) {
  const { title, description, image, url, deploy } = project;
  return (
    <div className="col-md-4 mt-4">
      <div className="card h-100">
        <div className=" text-end m-1">
          <a className="btn btn-outline-dark" href={url} target="_blank">
            Repo
          </a>
          <a
            className="btn btn-outline-dark mx-1"
            href={deploy}
            target="_blank"
          >
            Live
          </a>
        </div>
        <img src={image} alt="..." className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-text">{description.slice(0, 50)}...</div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [projects, setProjects] = useState(null);
  console.log(projects);
  useEffect(() => {
    fetch("/api/project")
      .then((response) => response.json())
      .then((json) => setProjects(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="text-center text-white bg-dark-subtle  my-4 mt-lg-5  ">
        Portfolio
      </h1>
      <div className="container">
        <div className="row">
          {projects?.map((project, i) => (
            <Card key={i} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
