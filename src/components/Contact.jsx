import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgegpndo");
  const navigate = useNavigate();
  useEffect(() => {
    if (state.succeeded) {
      navigate("/thank-you");
    }
  }, [state.succeeded]);

  return (
    <>
      <div id="contact" className="h-full md:h-dvh w-full relative">
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
                <div>
                  <FaLinkedin size={30} className="text-primary" />
                </div>
                <div>
                  <FaGithub size={30} className="text-primary" />
                </div>
                <div>
                  <FaSquareXTwitter size={30} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full mt-24 bg-teritiary">
            <div className="w-full h-full">
              <form
                onSubmit={handleSubmit}
                className="w-10/12 mx-auto h-full my-10 bg-teritiary rounded-lg flex flex-col items-start justify-start gap-4"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="w-[49%] flex flex-col">
                    <p className="text-primary font-Maison-Neue">First name</p>
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      className="pl-2 h-10 bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                    />
                  </div>
                  <div className="w-[49%] flex flex-col">
                    <p className="text-primary font-Maison-Neue">Last name</p>
                    <input
                      id="last_nam"
                      name="last_name"
                      type="text"
                      className="pl-2 h-10 bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                    />
                  </div>
                </div>
                <ValidationError
                  prefix="First name"
                  field="first_name"
                  errors={state.errors}
                />
                <ValidationError
                  prefix="Last name"
                  field="last_name"
                  errors={state.errors}
                />
                <div className="w-full flex flex-col">
                  <p className="text-primary font-Maison-Neue">Your email</p>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="pl-2 h-10 bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                  />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <div className="w-full flex flex-col">
                  <p className="text-primary font-Maison-Neue">Your message</p>
                  <textarea
                    className="pl-2 pt-1 w-full bg-white border-2 text-primary font-Interphases-reqular border-primary/50 rounded focus:outline-none"
                    name="message"
                    id="message"
                    cols="30"
                    rows="6"
                  ></textarea>
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <div className="w-full flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", duration: 0.3 }}
                    type="submit"
                    className={`bg-primary font-Maison-Neue text-white w-36 py-2 rounded flex items-center justify-center ${
                      state.submitting && "bg-primary/50"
                    }`}
                  >
                    {state.submitting ? "Sending..." : "Send message"}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
