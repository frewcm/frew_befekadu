import { FaComputer } from "react-icons/fa6";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { SiWolframmathematica } from "react-icons/si";

const Service = () => {
  return (
    <div id="service" className="h-auto md:h-dvh w-full bg-teritiary">
      <div className="w-10/12 mx-auto flex flex-col items-center">
        <div className="my-12">
          <p className="text-4xl font-Maison-Neue text-primary">Services</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="h-60 flex flex-col items-center w-10/12 lg:w-8/12 mx-auto gap-4">
            <SiWolframmathematica size={30} className="text-secondary mt-8" />
            <p className="font-Maison-Neue text-primary">Graphic & Branding</p>
            <p className="text-center font-Interphases-reqular text-primary">
              I provide professional website branding services for a compelling
              and cohesive online brand presence.
            </p>
          </div>
          <div className="h-60 flex items-center  flex-col w-10/12 lg:w-8/12 mx-auto gap-4">
            <FaComputer size={30} className="text-secondary  mt-8" />
            <p className="font-Maison-Neue text-primary">
              Full Stack Web Development
            </p>
            <p className="text-center font-Interphases-reqular text-primary">
              Expert web developer creating tailored, high-performance websites
              for businesses, ensuring optimal user experiences and results.
            </p>
          </div>
          <div className="h-60 flex items-center flex-col w-10/12 lg:w-8/12 mx-auto gap-4">
            <MdOutlineBrandingWatermark
              size={30}
              className="text-secondary mt-8"
            />
            <p className="font-Maison-Neue text-primary">Web Design</p>
            <p className="text-center font-Interphases-reqular text-primary">
              Elevate your brand with expert web design solutions. Contact us
              for a captivating experience.
            </p>
          </div>
          <div className="h-60 flex items-center flex-col w-10/12 lg:w-8/12 mx-auto gap-4">
            <FaHandshake size={30} className="text-secondary  mt-8" />
            <p className="font-Maison-Neue text-primary">Consultations</p>
            <p className="text-center font-Interphases-reqular text-primary">
              Expert deployment consultations for precision strategy, risk
              mitigation, and seamless implementation solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
