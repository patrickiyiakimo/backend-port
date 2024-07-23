import React from "react";
import AboutText from "./AboutText";

const About = () => {
  return (
    <div
      className="font-abc pl-3 md:pl-20 bg-gray-400 md:flex pb-40 text-gray-950"
      id="about"
    >
      <section>
        <div>
          <h3 className="text-xl uppercase text-blue-600  pb-5 pt-40">About</h3>
          <h3 className="text-4xl font-semibold pb-3">Who I Am</h3>
          <AboutText />
        </div>
        <p className="pt-7">Open to work for the following roles: </p>
        <p>Backend Developer</p>
        <p>Intern/Entry-Level Node.js Developer </p>
        <p>Intern/Entry-Level JavaScript Developer</p>
        <p>Full-Stack Developer with a focus on Backend</p>
        <a href="#projects" className="underline pt-10">
          Check out some of my latest projects
        </a>
      </section>

      <section className="mt-4 md:mt-56 mr-10 ">
        <div className="card bg-gray-400 shadow-2xl hover:scale-105 transition-all duration-200">
          <figure className="px-4 pt-4 pb-4 py-4 shadow-2xl ">
            <img
              src="/images/patrick.JPG"
              alt="my picture"
              className="rounded-lg  shadow-2xl"
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default About;
