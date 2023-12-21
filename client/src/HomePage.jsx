// src/components/HomePage.js
import React from "react";
import { logo2 } from "./assets";

const HomePage = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo2} alt="KHTzzz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Welcome to the Future of Web Development
        <br className="max-md:hidden" />
        <span className="orange_gradient">
          AI-Powered 3D Product Showcase
          <br /> Diffusion Models
        </span>
      </h1>
      <h2 className="desc">
        Unleash the potential of the digital realm with our groundbreaking
        course on building AI-infused 3D products showcase website. Dive into
        the convergence of 🚀React, 🌐ThreeJS, ✨React Three Fiber,
        🌈TailwindCSS, 🎥Framer Motion, 🧩 Reusable and Scalable Code, 🎨 Custom
        Color and File Support,🤖 AI-Powered Diffusion Models and discover how
        to craft a visually stunning online experience that transcends the
        ordinary.
      </h2>

      <div className="button-container">
        <button
          type="button"
          onClick={() => window.open("/App_1")}
          className="black_btn"
        >
          App 1
        </button>

        <button
          type="button"
          onClick={() => window.open("/App_2")}
          className="black_btn"
        >
          App 2
        </button>

        <button
          type="button"
          onClick={() => window.open("/App_3")}
          className="black_btn"
        >
          App 3
        </button>
      </div>
    </header>
  );
};

export default HomePage;
