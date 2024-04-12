import { motion, useCycle } from "framer-motion";
import { useState } from "react";

const bounceVariants = {
  visible: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.6,
      },
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.3,
      },
    },
  },
  visibleTwo: {
    x: [-20, 20],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.6,
      },
    },
  },
};

const Footer = () => {
  const [animation, cycleAnimation] = useCycle("visible", "visibleTwo");

  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="w-full h-40 py-5 bg-white flex items-end justify-center">
      <div className="mb-6 flex items-center justify-center gap-1 text-primary/60 font-Interphases-reqular">
        <p>&copy;</p>
        <p>{year}</p>
        <p>Frew Befekadu.</p>
        <p>All rights reserved.</p>
        {/* <motion.div
          variants={bounceVariants}
          animate={animation}
          className="ml-10 w-3 h-3 rounded-full bg-black"
        ></motion.div>
        <button onClick={() => cycleAnimation(!animation)}>
          cycle animation
        </button> */}
      </div>
    </div>
  );
};
export default Footer;
