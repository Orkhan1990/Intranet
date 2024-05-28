import { Label, Select } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


const NewCard = () => {
  return (
    <div className="min-h-screen ml-10 mr-10 mt-10">
      <h2 className="text-center text-lg font-semibold">Yeni kart yarat</h2>
      <form className="mt-10 ">
        <div className="border rounded-md p-5">
          <div className="flex items-center gap-10">
            <Label htmlFor="client" value="Müştəri adı" />
             <Select className="flex-1">
              <option value="">Müştərini seç</option>
             </Select>
             <Link to={"/newClient"} className="text-blue-600 flex items-center gap-2">
              <span>Yeni müştəri yarat</span>
              <FaPlus />
             </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCard;
