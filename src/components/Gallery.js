import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full p-4 py-16 ">
      <h2 className="text-center text-gray-600 p-4">GALLERY</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full" src="./img/pix1.jpeg" alt="" />
        </div>
        <div>
          <img className="w-full h-full" src="./img/pix5.jpeg" alt="" />
        </div>
        <div>
          <img className="w-full h-full" src="./img/pix7.jpeg" alt="" />
        </div>
        <div>
          <img className="w-full h-full" src="./img/pix4.avif" alt="" />
        </div>
        <div>
          <img className="w-full h-full" src="./img/pix1.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
