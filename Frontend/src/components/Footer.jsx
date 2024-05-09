import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-600 h-[200px] flex items-center">
      <div>
        <Link to={"/"} className="flex items-center gap-2 pl-20 pr-20">
          <img
            src="../images/manmetalicon.png"
            alt=""
            className="h-[55px] object-cover"
          />
          <div className="flex pt-[40px] gap-1 text-sm underline text-white">
            <p>&copy;</p>
            {new Date().getFullYear()}
            <p>Improtex Trucks and Buses</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
