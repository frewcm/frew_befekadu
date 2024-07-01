const About = () => {
  return (
    <div id="about" className="h-auto my-16 lg:my-0 lg:h-dvh relative">
      <div className="about-blob absolute w-0 lg:w-1/2  top-0 left-0 bottom-0 z-[-1] bg-teritiary"></div>
      <div className="w-10/12 h-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex flex-col items-center justify-center mb-8 mt-20 md:mt-12 lg:mb-0">
          <div className="w-full flex flex-col justify-center items-center lg:items-start relative">
            <div className="my-6 w-96 flex flex-col items-center justify-center rounded-full border-4 border-secondary relative">
              <div className="absolute bg-primary/60 hover:bg-primary/0 transition ease-linear delay-200 top-0 bottom-0 left-0 right-0 rounded-full"></div>
              <img
                className="bg-primary rounded-full"
                src="frew-image.png"
                alt="image of frew"
              />
            </div>
            <div className="w-96 flex justify-center">
              <p className="text-secondary text-2xl font-Interphases-reqular">
                Frew Befekadu
              </p>
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col justify-center items-end">
          {/* <div className="about-blob absolute  w-24 h-24 top-30 right-30 z-[-1] bg-secondary/20"></div> */}
          <p className="text-secondary font-Interphases-reqular bg-secondary/5 rounded-full text-sm border border-secondaryx` px-2 py-1">
            About me
          </p>
          <p className="text-4xl text-end font-Maison-Neue text-primary mt-2 mb-4">
            I'm a Web Developer.
          </p>
          <p className="w-10/12 text-end mb-4 text-primary font-Interphases-reqular">
            As an adept web developer with years of hands-on experience, I
            specialize in crafting cutting-edge websites and applications using
            a diverse set of modern technologies such as HTML, CSS, JavaScript,
            React, Next.js, and Node.js. My proficiency extends beyond the
            basics, allowing me to create dynamic and user-friendly interfaces
            that seamlessly integrate with backend systems. What sets me apart
            is my dedication to staying ahead of industry trends, ensuring that
            my skills remain current and my projects reflect the latest
            advancements in web development.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
