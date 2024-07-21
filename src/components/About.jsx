import React from "react";
import AboutText from "./AboutText";
import patrick from "../images/patrick.JPG";

const About = () => {
  return (
    <div className="font-abc pl-20 bg-gray-200 flex pb-40">
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
      </section>

      <section className="mt-56 mr-10 ">
        <img
          src={patrick}
          alt="my picture"
          className="rounded-lg  shadow-2xl"
        />
      </section>
    </div>
  );
};

export default About;
