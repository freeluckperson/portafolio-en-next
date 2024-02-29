"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import st from "./page.module.css";
import { useEffect } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/next.svg", alt: "Descripción de la imagen 1" },
  { id: 2, src: "vercel.svg", alt: "Descripción de la imagen 2" },
  // Agrega más objetos para cada imagen adicional
];

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.js");
  }, []);

  return (
    <div className="gridWrapper">
      <div>
        <Image
          src="/vercel.svg"
          id={st.img}
          alt="..."
          width={0}
          height={0}
          priority
        />
      </div>
      <div>
        <Image
          src="/vercel.svg"
          id={st.img}
          alt="..."
          width={0}
          height={0}
          priority
        />
      </div>
      <div>
        <Image
          src="/vercel.svg"
          id={st.img}
          alt="..."
          width={0}
          height={0}
          priority
        />
      </div>
      <div>
        <Image
          src="/vercel.svg"
          id={st.img}
          alt="..."
          width={0}
          height={0}
          priority
        />
      </div>
    </div>
  );
}
