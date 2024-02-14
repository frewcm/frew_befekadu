import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      repeatType: "mirror",
      repeat: 5,
      duration: 0.3,
    },
  },
};

const Contact = () => {
  return (
    <div id="contact" className="h-auto md:h-dvh w-full relative">
      <div className="contact-blob absolute z-[-1] bg-teritiary w-1/4 h-full top-0 left-0"></div>
      <div className="w-10/12 mx-auto flex flex-wrap">
        <div className="w-full md:w-2/5 min-w-56 h-64 lg:h-[470px] mt-24">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <p className="text-4xl font-Maison-Neue text-primary">
              Let's <span className="text-secondary">connect.</span>
            </p>
            <p className="w-8/12 md:w-10/12 text-primary font-Interphases-reqular">
              Need a beautiful, well-structured website that you can own and
              maintain yourself? Get in touch.
            </p>
            <div className="flex items-center gap-2">
              <FaPhoneAlt size={20} className="text-secondary" />
              <p className="text-primary">+251943946006</p>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail size={20} className="text-secondary" />
              <p className="text-primary">frewbefekadu32@gmail.com</p>
            </div>
            <div className="flex gap-4 mt-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeatType: "mirror",
                  repeat: 2,
                }}
              >
                <FaLinkedin size={30} className="text-primary" />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeatType: "mirror",
                  repeat: 2,
                }}
              >
                <FaGithub size={30} className="text-primary" />
              </motion.div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeatType: "mirror",
                  repeat: 1,
                }}
              >
                <FaSquareXTwitter size={30} className="text-primary" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-3/5 min-w-[400px] h-[470px] mt-24 bg-teritiary">
          <div className="w-full h-full">
            <div className="w-10/12 mx-auto h-5/6 my-10 bg-teritiary rounded-lg flex flex-col items-start justify-start gap-4">
              <div className="w-full flex items-center justify-center gap-2">
                <div className="w-1/2 flex flex-col">
                  <p className="text-primary font-Maison-Neue">First name</p>
                  <input
                    type="text"
                    className=" h-10 bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <p className="text-primary font-Maison-Neue">Last name</p>
                  <input
                    type="text"
                    className=" h-10 bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <p className="text-primary font-Maison-Neue">Your email</p>
                <input
                  type="text"
                  className=" h-10 bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                />
              </div>
              <div className="w-full flex flex-col">
                <p className="text-primary font-Maison-Neue">Your message</p>
                <textarea
                  className="w-full bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="w-full flex justify-end">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="bg-primary font-Maison-Neue text-white px-4 py-2 rounded"
                >
                  Send message
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
