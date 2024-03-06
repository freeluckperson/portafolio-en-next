import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
    
      <div className="container ">
        <div className="row">
          <div className="col-md-4 my-4 ">
            <div className="card h-100 border-0 text-white bg-dark ">
              <h5 className="text-uppercase mb-4 fw-bold text-warning text-center">
                About
              </h5>
              <p style={{ textAlign: "justify" }}>
                👋 Hello! I'm Erick Segura, a fullstack web developer 🌐💻 I'm
                pleased to create web projects with MERN and PERN stacks 📚
              </p>
            </div>
          </div>

          <div className="col-md-4 my-4 ">
            <div className="card h-100 border-0 text-white bg-dark ">
              <h5 className="text-uppercase mb-4 fw-bold text-warning text-center">
                Company name
              </h5>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi harum accusamus tempora autem recusandae possimus
                impedit aspernatur molestias, provident architecto ipsa sint cum
                necessitatibus ad inventore voluptates sunt ex quam.
              </p>
            </div>
          </div>

          <div className="col-md-4 my-4 ">
            <div className="card h-100 border-0 text-white bg-dark ">
              <h5 className="text-uppercase mb-4 fw-bold text-warning text-center">
                contact
              </h5>

              <p className="d-flex ">
                <svg
                  className="me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width={20}
                  style={{ fill: "white" }}
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <span> Maturin,Vzla.</span>
              </p>

              <p className="d-flex ">
                <svg
                  className="me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={20}
                  style={{ fill: "white" }}
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <span>(+58) 412 - 1036964</span>
              </p>

              <p className="d-flex ">
                <svg
                  className="me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={20}
                  style={{ fill: "white" }}
                >
                  <path d="M128 64v96h64V64H386.7L416 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L432 18.7C420 6.7 403.7 0 386.7 0H192c-35.3 0-64 28.7-64 64zM0 160V480c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32zm480 32H128V480c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM256 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM224 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <span>(+58) 291 - 6415297</span>
              </p>

              <p className="d-flex">
                <svg
                  className="me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={20}
                  style={{ fill: "white" }}
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                <span>gestionecesaria@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
