import React from "react";

const Contact = () => {
  return (
    <div className="font-abc bg-gray-200">
      <div className="pl-20">
        <h3 className="text-xl uppercase text-blue-600 pb-7">Contact</h3>
        <h3 className="text-4xl font-semibold pb-5">Get In Touch</h3>
        <div className="flex">
          <div className="card bg-gray-200 w-2/4 shadow-2xl">
            <figure className="px-10 pt-10">
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="text-4xl font-semibold">Patrick Iyiakimo</h2>
              <p>An Aspirant Backend Engineer</p>
              <p>
                I am available for freelance or full-time positions. Contact me
                and let's talk.
              </p>
              <p className="uppercase text-center pt-10">connect with me</p>
            </div>
          </div>
          <div className="card bg-gray-200 ml-5 w-2/4 mr-5 uppercase shadow-2xl">
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
              <textarea type="text" className=" py-10 rounded-sm" />
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="py-3 uppercase rounded-lg text-white bg-blue-600 hover:bg-blue-300 duration-300 ease-in-out"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                send message
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">nice!</h3>
                  <p className="py-4 text-blue-600  text-2xl">
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
    </div>
  );
};

export default Contact;
