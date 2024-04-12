import { portfolio } from "../data/data";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="portfolio" className="w-full mb-10">
      <div className="w-10/12 mx-auto">
        <div className="my-16 flex flex-col justify-center items-center gap-2">
          <p className="text-secondary font-Interphases-reqular bg-secondary/5 rounded-full text-sm border border-secondaryx` px-2 py-1">
            Portfolio
          </p>
          <p className="text-4xl font-Maison-Neue text-primary">My works</p>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
          {portfolio.map((project) => {
            return (
              <div className="h-96 relative" key={project.id}>
                <div className="absolute top-0 left-0 bg-primary/60 h-full w-full rounded  opacity-0 hover:opacity-100 transition-opacity ease-linear delay-200">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center"
                  >
                    <motion.div className="flex flex-col items-center justify-center gap-2">
                      <Link to={project.link}>
                        <FaExternalLinkAlt size={25} className="text-white" />
                      </Link>
                      <p className="text-white font-Interphases-reqular">
                        {project.title}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
                <img
                  className="w-full h-full object-cover rounded"
                  src={project.img}
                  alt="project image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
