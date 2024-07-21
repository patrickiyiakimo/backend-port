import React from "react";
import patrick from "../images/patrick.JPG";

const Contact = () => {
  return (
    <div className="font-abc bg-gray-200 pb-20 md:pb-40" id="contact">
      <div className="pl-3 md:pl-20">
        <h3 className="text-xl uppercase text-blue-600 pb-7">Contact</h3>
        <h3 className="text-4xl font-semibold pb-5">Get In Touch</h3>
        <div className="md:flex">
          <div className="card bg-gray-200 md:w-2/4 shadow-2xl">
            <figure className="px-5 md:px-10 md:pt-10">
              <img src={patrick} alt="my picture" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-blue-600">
                Patrick Iyiakimo
              </h2>
              <p>An Aspirant Backend Engineer</p>
              <p>
                I am available for freelance or full-time positions. Contact me
                and let's talk.
              </p>
              <p className="uppercase text-center pt-10">connect with me</p>
            </div>
          </div>
          <div className="card mt-5 bg-gray-200 md:ml-5 md:w-2/4 md:mr-5 uppercase shadow-2xl">
            <div className="card-body">
              <label>name</label>
              <input type="text" className=" py-3 rounded-sm" />
              <label>phone number</label>
              <input type="text" className=" py-3 rounded-sm" />
              <label>Email</label>
              <input type="text" className=" py-3 rounded-sm" />
              <label>subject</label>
              <input type="text" className=" py-3 rounded-sm" />
              <label>message</label>
              <textarea type="text" className=" h-40 rounded-sm" />
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="py-3 uppercase rounded-lg text-white bg-blue-600 hover:text-blue-950 hover:bg-blue-300 duration-300 ease-in-out"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                send message
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">nice!</h3>
                  <p className="py-4 text-blue-600  md:text-2xl">
                    Thanks for contacting me
                  </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      <a href="/">
        <button className="px-5 py-5 border-none bg-gray-200 shadow-2xl ml-20 mt-10 text-blue-600 rounded-full">
          <svg
            className=" w-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Contact;
