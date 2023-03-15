import React from "react";

const Activities = () => {
  return (
    <div className=" max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  ">
          RESORTS
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="./img/pix1.jpeg"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  ">
          RESORTS
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src="./img/pix6.webp"
          alt=""
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  ">
          RESORTS
        </h3>
        <img
          className="w-full h-full object-cover relative border-4 border-white shadow-lg max-h-[500px]"
          src="./img/pix7.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Activities;
