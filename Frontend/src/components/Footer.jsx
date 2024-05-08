import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#eceff3] h-[200px] flex items-center">
      <div>
        <Link to={"/"} className="flex items-center gap-2 pl-20 pr-20">
          <img
            src="../images/man-truck.png"
            alt=""
            className="h-20 object-cover"
          />
          <div className="flex pt-8 text-sm">
            <p>&copy;</p>
            {new Date().getFullYear()}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
