import React from "react";
import profileImage from "../assets/pngtree-programmer-clipart-developer-sitting-behind-his-computer-in-glasses-cartoon-vector-png-image_6815441.png";
import { motion } from "framer-motion";

function Hero() {

  const container = (delay) =>({
    hidden:{x:-100,opacity:0},
    visible:{x:0,opacity:1,transition:{duration:1,delay:delay}},

  })

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ujjwal Tamrakar
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full-Stack Web Developer
            </motion.span>
            <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I am a passionate web developer with a knack for crafting
              robust and scalable web applications.I have honed my skills in front-end technologies like
              React and Next.js, as well as back-end technologies like Spring Boot
              and PostgreSQL. My goal is to leverage my
              expertise to create innovative solutions that drive business
              growth and deliver exceptional user experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={profileImage} alt="profileImage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
