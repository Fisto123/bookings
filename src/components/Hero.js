import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="./img/pix1.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] mx-auto ">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4  ">
          <h1 className="font-bold text-6xl ">Find your special trip</h1>
          <h2 className="text-4xl py-4 italic">With BOOKINGZ</h2>
          <p>
            I AM VERY SURE THAT YOU WILL ENJOY YOUR DAY WITH OUR EXCLUSIVE
            PACKAGES AND YOU WILL SURELY ENJOY YOUR STAY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
