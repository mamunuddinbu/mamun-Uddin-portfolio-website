import React from "react";
import Tilt from "react-tilt";
import Kaptai from "../assets/personal/Kaptai.png";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex flex-col-reverse md:flex-row text-secondary text-[17px] leading-[30px]"
      >
        <div className="w-5/6">
          <p className="text-xl mb-6">
            I'm a Full Stack Web Developer with expertise in the MERN (MongoDB,
            Express, React, Node.js) stack. I have a passion for creating
            responsive and user-friendly web applications that deliver a great
            user experience.
          </p>
          <p className="text-xl mb-6">
            With several years of experience in web development, I have worked
            on various projects, ranging from small business websites to complex
            web applications. I'm skilled in front-end development using modern
            JavaScript frameworks like React. and I'm proficient in back-end
            development using Node.js and Express. I also have experience
            working with databases such as MongoDB.
          </p>
          <p className="text-xl">
            My goal is to build innovative and efficient web solutions that meet
            the client's requirements and exceed their expectations. I am a
            dedicated and detail-oriented developer, always striving for code
            quality and continuous improvement. I love learning new technologies
            and staying up-to-date with the latest trends in web development.
          </p>
        </div>
        <div className="relative ">
          <img
            src={Kaptai}
            alt=""
            className="object-cover object-center h-3/4 rounded-2xl border-2 border-green-500 m-8 "
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap max-w-5xl justify-between">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
