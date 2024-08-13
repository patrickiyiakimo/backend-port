import React, { useState } from "react";
import * as Yup from "yup";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Handle successful validation and form submission
        console.log("Form data:", formData);
        setErrors({});
        window.location.href="/"
      })
      .catch((err) => {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });

  };

  return (
    <div
      className="font-abc bg-gray-400 pb-20 md:pb-40 text-gray-950"
      id="contact"
    >
      <div className="pl-3 md:pl-20">
        <h3 className="text-xl uppercase text-blue-600 pb-7">Contact</h3>
        <h3 className="text-4xl font-semibold pb-5">Get In Touch</h3>
        <div className="md:flex">
          <div className="card bg-gray-400 md:w-2/4 shadow-2xl">
            <figure className="px-5 md:px-10 md:pt-10">
              <img
                src="/images/patrick.JPG"
                alt="my picture"
                className="rounded-xl hover:scale-105 transition-all duration-200"
              />
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
          <div className="card mt-5 bg-gray-400 md:ml-5 md:w-2/4 md:mr-5 uppercase shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                {errors.name && (
                  <div className="text-red-600 p-3 w-72 text-sm rounded-md">
                    {errors.name}
                  </div>
                )}
                <input
                  type="text"
                  name="name"
                  className="py-3 rounded-sm w-full mb-5 bg-gray-200"
                  value={formData.name}
                  onChange={handleChange}
                />{" "}
                <br />
                <label>Phone Number</label>
                <br />
                {errors.phone && (
                  <div className="text-red-600 p-3 w-72 text-sm rounded-md ">
                    {errors.phone}
                  </div>
                )}
                <input
                  type="text"
                  name="phone"
                  className="py-3 rounded-sm w-full mb-5 bg-gray-200"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <br />
                <label>Email</label>
                <br />
                {errors.email && (
                  <div className="text-red-600 p-3 w-72 text-sm rounded-md ">
                    {errors.email}
                  </div>
                )}
                <input
                  type="text"
                  name="email"
                  className="py-3 rounded-sm w-full mb-5 bg-gray-200"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>Subject</label>
                <br />
                {errors.subject && (
                  <div className="text-red-600 p-3 w-72 text-sm rounded-md">
                    {errors.subject}
                  </div>
                )}
                <input
                  type="text"
                  name="subject"
                  className="py-3 rounded-sm w-full mb-5 bg-gray-200"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <br />
                <label>Message</label>
                <br />
                {errors.message && (
                  <div className="text-red-600 p-3 w-72 text-sm rounded-md ">
                    {errors.message}
                  </div>
                )}
                <textarea
                  name="message"
                  className="h-40 rounded-sm w-full mb-5 bg-gray-200"
                  value={formData.message}
                  onChange={handleChange}
                />
                <br />
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button
                  type="submit"
                  className="py-3 w-full uppercase rounded-lg text-white bg-blue-600 hover:text-blue-950 hover:bg-blue-300 duration-300 ease-in-out"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Send Message
                </button>
                <dialog id="my_modal_2" className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">Nice!</h3>
                    <p className="py-4 text-blue-600 md:text-2xl">
                      Thanks for contacting me
                    </p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                  </form>
                </dialog>
              </form>
            </div>
          </div>
        </div>
      </div>
      <a href="#home">
        <button className="px-5 py-5 border-none bg-gray-200 shadow-2xl ml-20 mt-10 text-blue-600 rounded-full">
          <svg
            className="w-12"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default Contact;
