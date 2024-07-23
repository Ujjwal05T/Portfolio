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
              I am currently pursuing MCA from IPS Academy,Indore.I am a
              dedicated and versatile frontend developer with a passion for
              creating efficient and user-friendly web applications.I have
              worked with a variety of technologies, including React, Next.js,
              Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web
              development began with a deep curiosity for how things work, and
              it has evolved into a career where I continuously strive to learn
              and adapt to new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
