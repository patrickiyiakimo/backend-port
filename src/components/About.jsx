import React from "react";
import AboutText from "./AboutText";
import patrick from "../images/patrick.JPG";

const About = () => {
  return (
    <div className="font-abc pl-3 md:pl-20 bg-gray-200 md:flex pb-40">
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
      <a href="#projects" className="underline pt-10">Check out some of my latest projects</a>
      </section>

      <section className="mt-4 md:mt-56 mr-10 ">
        <div className="card bg-gray-200 shadow-2xl">
          <figure className="px-4 pt-4">
            <img
              src={patrick}
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
