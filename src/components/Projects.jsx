import { useEffect, useState } from "react";
import React from "react";
import programming from "../images/programming.png"


const Projects = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/details.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDetails(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.error("Fetch error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-abc bg-gray-400 pb-40 text-gray-950" id="projects">
      <div className="ml-3 md:pl-20">
        <h3 className="text-xl uppercase text-blue-600 pb-7">Projects</h3>
        <h3 className="text-4xl font-semibold pb-5">What I've Built</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:ml-10 md:mr-10">
        {details.map((detail) => (
          <div
            className="card w-2/2 h-96 shadow-xl image-full hover:bg-blue-800 transition duration-300 ease-in-out"
            key={detail.id}
          >
            <figure>
              <img src={programming} alt="programming" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{detail.title}</h2>
              <p>{detail.body}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-white text-blue-950 w-44">{detail.text}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;