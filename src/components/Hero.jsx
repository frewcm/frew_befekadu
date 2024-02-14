import { motion } from "framer-motion";
import { Link } from "react-scroll";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const nameVariants = {
  hidden: {
    x: -600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
};

const sloganVariants = {
  hidden: {
    x: -600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.4,
    },
  },
};
const descriptionVariants = {
  hidden: {
    x: -600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};

const buttonVariants = {
  hidden: {
    x: -600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      repeatType: "mirror",
      repeat: 5,
    },
  },
};

const Hero = () => {
  return (
    <div id="hero" className="w-full h-[540px] relative">
      <div className="hero-blob absolute z-[-1] bg-teritiary w-1/2 h-full top-0 right-0"></div>
      <div className="hero-blob2 absolute z-[-1] bg-teritiary h-32 w-32 bottom-20 left-40"></div>
      <div className="hero-blob2 absolute z-[-1] bg-teritiary h-16 w-16 top-20 left-10"></div>
      <div className="z-10 h-full w-10/12 grid lg:grid-cols-2 items-end mx-auto gap-2">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className=" flex flex-col items-start gap-2 h-11/12 my-auto w-full"
        >
          <motion.p
            variants={nameVariants}
            className="text-secondary font-Interphases-reqular bg-secondary/5 rounded-full text-sm border border-secondaryx` px-2 py-1"
          >
            My name is <span className="text-primary">Frew Befekadu</span>
          </motion.p>
          <motion.p
            variants={sloganVariants}
            className="text-5xl font-Maison-Neue text-primary mb-4 tracking-wide "
          >
            I Build Custom Website Solutions That Help Your
            <span className="text-secondary"> Business Grow.</span>
          </motion.p>

          <motion.p
            variants={descriptionVariants}
            className="font-Interphases-reqular text-primary mb-6"
          >
            I craft exceptional digital experiences through innovative web
            development, expertly translating your vision into impactful
            solutions. Elevate your online presence with excellence.
          </motion.p>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="font-Maison-Neue text-white bg-primary px-4 py-2"
            >
              See my work
            </motion.button>
          </Link>
        </motion.div>
        <div className="bg-secondary hidden lg:flex">right</div>
      </div>
    </div>
  );
};

export default Hero;
