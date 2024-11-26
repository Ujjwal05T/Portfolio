import React from "react";
import aboutImg from "../assets/wp10167050-full-stack-wallpapers.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="text-center my-20 text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="flex item-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About" />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center">
          <motion.div
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
          className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              {" "}
              I am currently pursuing MCA from IPS Academy,Indore.I am a
              dedicated and versatile developer with a passion for
              creating efficient and user-friendly web applications.I have
              worked with a variety of technologies, including React, Nextjs, Spring Boot,
              Spring Security, TailwindCSS, and PostgreSQL. My journey in web
              development began with a deep curiosity for how things work, and
              it has evolved into a career where I continuously strive to learn
              and adapt to new challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
