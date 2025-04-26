import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="ml-5">
          <img src="/logo.png" alt="" className="mb-5 w-20" />
          <p className="w-full md:w-2/3 text-gray-600 ">
          Empowering citizens to report and resolve community issues efficiently.
          Together, we can make our community better.
          </p>
        </div>
        <div className="">
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>ABOUT Us</li>
            <li>Delivery</li>
            <li>Privicy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-123-168-0976</li>
            <li>saquibanjumdeveloper@gmail.com</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-900" />
        <p className="mt-2 text-sm text-center">Made 💖 with <a href='https://github.com/Saquib-Anjum' className="text-gray-950">Saquib</a></p>
        <p className="mb-5 text-sm text-center">Copyright 2025 @CivicPulse - All Right Reserved.</p>
        
      </div>
    </div>
  );
};

export default Footer;