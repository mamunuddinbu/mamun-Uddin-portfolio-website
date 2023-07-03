import React from "react";
import { motion } from "framer-motion";
import { RiBootstrapFill, RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaSass } from "react-icons/fa";
import { ImCss3, ImHtmlFive } from "react-icons/im";
import { SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";

const icons = [
  <ImHtmlFive className="text-red-500" />,
  <ImCss3 className="text-blue-500" />,
  <FaSass className="text-pink-500" />,
  <RiBootstrapFill className="text-purple-500" />,
  <SiTailwindcss className="text-cyan-500" />,
  <RiJavascriptFill className="text-yellow-500" />,
  <FaReact className="text-blue-600" />,
  <SiMongodb className="text-green-500" />,
  <SiNodedotjs className="text-green-600" />,
  <SiExpress className="text-white" />,
];

const Ball = ({ icon, delay }) => {
  return (
    <motion.div
      className="my-8"
      animate={{
        y: ["-150%", "150%", "-150%"], // Move the ball vertically using a pendulum wave motion
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
        delay,
      }}
    >
      <motion.span
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {icon}
      </motion.span>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <div className="flex mx-auto max-w-6xl justify-between items-center text-4xl">
      {icons.map((icon, index) => (
        <Ball key={index} icon={icon} delay={index * 0.2} />
      ))}
    </div>
  );
};


export default Tech;
