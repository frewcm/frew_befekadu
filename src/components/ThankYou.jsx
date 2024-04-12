import { Link } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";

const ThankYou = () => {
  return (
    <section id="thank-you" className="w-full h-dvh ">
      <div className="w-6/12 h-full mx-auto flex flex-col justify-center items-center space-y-6">
        <p className="text-3xl font-Maison-Neue text-primary text-center tracking-wide">
          Thank you for reaching out. I will connect with you as soon as
          possible.
        </p>
        <Link
          className="flex items-center text-secondary gap-2 font-Interphases-reqular"
          to="/"
        >
          <SlArrowLeftCircle size={25} />
          <span>Go back</span>
        </Link>
      </div>
    </section>
  );
};
export default ThankYou;
