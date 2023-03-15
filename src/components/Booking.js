import React from "react";

const Booking = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4  bg-blue-500">
      <form className="lg:flex justify-between w-full">
        <div className="flex flex-col my-2 py-2 ">
          <label>destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Grande Antique</option>
            <option>key west</option>
            <option>scott east</option>
            <option>mark white</option>
          </select>
        </div>
        <div className="flex w-full ">
          <div className="flex flex-col w-full lg:'max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input type="date" className="border rounded-md" />
          </div>
          <div className="flex flex-col w-full lg:'max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input type="date" className="border rounded-md" />
          </div>
        </div>
        <div className="flex flex-col p-2 my-2 w-full">
          <label>search</label>
          <button className="w-full">Rates and availabilities</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
