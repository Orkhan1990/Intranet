import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../redux/features/auth/authSlice";
import SubMenu from "./SubMenu";
import { CiSettings } from "react-icons/ci";
import { navbarList } from "../data/data";

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signOutButton = () => {
    dispatch(signOut());
  };

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };
  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };
  
  

  return (
    <div className="bg-gray-600  h-[80px]">
      <div className="flex justify-between h-full pl-20 pr-20 items-center ">
        <Link to={"/"}>
          <img
            src="../images/manmetalicon.png"
            alt=""
            className="h-[55px] object-cover"
          />
        </Link>
        <nav className="flex items-center gap-2 text-sm font-serif text-white">
          <ul className="flex items-center justify-evenly w-[500px]">
           {
            navbarList.map((item,index)=>(
              <SubMenu item={item} key={index}/>
            ))
           }
          </ul>
          {currentUser ? <Button>{currentUser.username}</Button> : "Daxil ol"}

          <Button
            className="cursor-pointer bg-blue-500"
            onClick={signOutButton}
          >
            Çıxış
          </Button>
          <CiSettings  className="text-2xl"/>
        </nav>
      </div>
    </div>
  );
};

export default Header;
