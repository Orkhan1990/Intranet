import { Label, Select, TextInput,Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import SelectWithButtons from "../components/SelectWithButtons";

const NewCard = () => {
  const [error, setError] = useState(false);
  const [clients, setClients] = useState([]);

  console.log(clients);

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await fetch(
          "http://localhost:3004/api/v1/client/getClients",
          {
            method: "GET",
            credentials: "include", // added this part
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        if (!res.ok || data.success === false) {
          setError(data.message);
          return;
        }
        setClients(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getClients();
  }, []);
  return (
    <div className="min-h-screen m-10">
      <h2 className="text-center text-lg font-semibold">Yeni kart yarat</h2>
      <form className="mt-10 flex flex-col gap-5 text-sm">
        <div className="border rounded-md p-5">
          <div className="flex items-center gap-10">
            <Label htmlFor="client" value="Müştəri adı" />

            <Select className="flex-1">
              <option value="">Müştərini seç</option>
              {clients.map((item) => (
                <option value={item.companyName}>{item.companyName}</option>
              ))}
            </Select>

            <Link
              to={"/newClient"}
              className="text-blue-600 flex items-center gap-2"
            >
              <span>Yeni müştəri yarat</span>
              <FaPlus />
            </Link>
          </div>
        </div>
        <div className="border p-5 rounded-md">
          <h2>Gediş</h2>
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
            <input  id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

              <span>Gediş</span>
            </div>
            <div className="flex gap-2 items-center">
            <input  id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

              <span>Bobcat zəmanət</span>
            </div>
            <div className="flex gap-2 items-center">
            <input  id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

              <span>AMMANN zəmanət</span>
            </div>
          </div>
        </div>

        <div className="border p-5 rounded-md flex flex-col gap-5">
          <div className="flex items-center">
            <span className="w-[300px]">Texnikanın növü</span>
            <Select>
              <option value="tiqac">Tiqac</option>
              <option value="yaripricep">Yarı pricep</option>
              <option value="pricep">Pricep</option>
              <option value="avtobus">Avtobus</option>
              <option value="neoplan">Neoplan</option>
              <option value="digerTexnika">Digər texnikalar</option>
            </Select>
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">Istehsalçı</span>
            <Select>
              <option value="man">MAN</option>
              <option value="mercedes">Mercedes</option>
              <option value="daf">DAF</option>
              <option value="ford">Ford</option>
              <option value="volvo">Volvo</option>
            </Select>
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">Model</span>
            <TextInput type="text" className="w-[500px]" />
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">Şassi nömrəsi</span>
            <TextInput type="text" className="w-[500px]" />
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">Maşın nömrəsi</span>
            <TextInput type="text" className="w-[500px]" />
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">İstehsal tarixi</span>
            <Select>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </Select>
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Km/Motosaat</span>
            <TextInput type="text" className="w-[500px]" />
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Dövlət nömrəsi</span>
            <TextInput type="text" className="w-[500px]" />
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Ödəniş üsulu</span>
            <Select>
            <option value="kocurulme">Köçürülmə</option>
              <option value="nagd">Nağd</option>
              <option value="qarantiya">Qarantiya</option>
              <option value="daxili">Daxili iş</option>
              <option value="pos">POS</option>
            </Select>
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">ƏDV</span>
            <input  id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Təkrar təmir</span>
            <input  id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Servis məlumatı</span>
            <input  id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            </div>
        </div>
         
        <div className="border p-5 rounded-md">
          <h2>Problemlər</h2>
          <div className="flex gap-[250px] mt-2">
          <TextInput type="text" className="w-[500px]" />
         <SelectWithButtons/>
        
          </div>
          <Button color="blue" className="mt-5">Əlavə et <span className="ml-2 ">+</span></Button>
        </div>
      </form>
    </div>
  );
};

export default NewCard;
