import React from "react";
import aboutImg from "../assets/Front-End-Development.jpeg";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="text-center my-20 text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex item-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {" "}
              About Text Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Consequatur recusandae quam iusto corporis ducimus similique
              rerum at id. Accusamus ad laborum aliquid blanditiis id,
              consequatur distinctio corporis est at beatae mollitia, expedita
              deserunt placeat dolorem tempora obcaecati exercitationem sunt eum
              minus praesentium quo excepturi sapiente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
