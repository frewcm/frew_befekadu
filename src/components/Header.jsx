import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const content = (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
        exit={{ y: -1000 }}
        className="z-40 h-[540px] w-full sticky top-[100px] right-0 bg-white"
      >
        <ul className="w-10/12 mx-auto font-Maison-Neue text-lg mt-6">
          <motion.li
            whilehover={{ scale: 1.1, originX: 0 }}
            className="text-primary text-start border-b border-secondary/30 py-4"
          >
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-700}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, originX: 0 }}
            className="text-primary text-start border-b border-secondary/30 py-4"
          >
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-700}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, originX: 0 }}
            className="text-primary text-start border-b border-secondary/30 py-4"
          >
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-700}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, originX: 0 }}
            className="text-primary text-start border-b border-secondary/30 py-4"
          >
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-700}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, originX: 0 }}
            className="text-start py-4"
          >
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-700}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 rounded cursor-pointer text-white bg-primary"
            >
              Connect
            </Link>
          </motion.li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      <div className="sticky top-0 bg-white z-50 w-full">
        <div className="w-10/12 py-8 mx-auto flex items-center justify-between">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex items-center font-Maison-Neue cursor-pointer"
          >
            <motion.div
              drag
              dragConstraints={{
                left: 200,
                right: 700,
                top: 200,
                bottom: 500,
              }}
              className="flex"
            >
              <p className="text-primary text-3xl">Lo</p>
              <p className="text-secondary text-3xl">go.</p>
            </motion.div>
          </Link>
          <div className="hidden lg:flex items-center gap-16">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-primary font-Maison-Neue cursor-pointer hover:border-b-2 border-b-secondary transition ease-linear delay-200"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-primary font-Maison-Neue cursor-pointer hover:border-b-2 border-b-secondary transition ease-linear delay-200"
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-primary font-Maison-Neue cursor-pointer hover:border-b-2 border-b-secondary transition ease-linear delay-200"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3, repeatType: "mirror", repeat: 5 }}
                className="text-white font-Maison-Neue px-4 py-2 bg-primary rounded cursor-pointer"
              >
                Connect
              </motion.button>
            </Link>
          </div>
          <div onClick={handleNavbar} className="block lg:hidden">
            {!isOpen ? (
              <div>
                <IoMdMenu className="text-primary " size={30} />
              </div>
            ) : (
              <div>
                <FaXmark className="text-primary " size={30} />
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && content}
    </>
  );
};

export default Header;
