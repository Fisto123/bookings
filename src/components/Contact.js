import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full py-16 p-4">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="text-center text-gray-700 py-2">We are standing by</p>
      <div className="grid md:grid-cols-2">
        <img
          src="./img/pix5.jpeg"
          alt=""
          className="w-full md:h-full object-cover max-h-[500px] h-[200px]"
        />
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="First" />
            <input className="border m-2 p-2" type="text" placeholder="Last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="Email"
            />
            <input className="border m-2 p-2 " type="tel" placeholder="Phone" />
            <input
              type="text"
              placeholder="Address"
              className="border col-span-2 p-2 m-2"
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className=" col-span-2 m-2 p-2 w-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
