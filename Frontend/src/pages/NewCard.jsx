import {
  Label,
  Select,
  TextInput,
  Button,
  Table,
  Textarea,
} from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NewCardProblems from "../components/NewCardProblems";
import NewCardWorkers from "../components/NewCardWorkers";
import NewCardAddParts from "../components/NewCardAddParts";
import AddCharges from "../components/AddCharges";
import { FiPrinter } from "react-icons/fi";

const NewCard = () => {
  const[formData,setFormData]=useState({
    clientId:"",
    type:"",
    manufactured:"",
    model:"",
    sassi:"",
    carNumber:"",
    produceDate:"",
    km:"",
    qostNumber:"",
    paymentType:"",
    nds:false,
    repairAgain:false,
    servisInfo:false,
    comments:"",
    recommendation:"",
    problems:[{
      description:"",
      workers:[]
    }],
    cardWorkers:[{
      codeOfWork:"",
      nameOfWork:"",
      av:0,
      price:0,
      discount:0,
      oil:"",
      workers:[]
    }],
    charges:[{
      description:"",
      price:0
    }]

  })
  const [error, setError] = useState(false);
  const [clients, setClients] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [openGedis, setOpenGedis] = useState(false);
  const [openBobcatWarranty, setOpenBobcatWarranty] = useState(false);
  const [openAmmannWarranty, setOpenAmmannWarranty] = useState(false);

  // console.log(clients, workers);
  // console.log(open);
  // console.log(formData);

  useEffect(() => {
    const getWorkers = async () => {
      try {
        const res = await fetch(
          "http://localhost:3004/api/v1/user/getWorkers",
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

        setWorkers(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getWorkers();
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

  const handleChange = (e) => {


    setFormData({...formData,[e.target.id]:e.target.value})
   
  };
  return (
    <div className="min-h-screen m-10 ">
      <h2 className="text-center text-lg font-semibold">Yeni kart yarat</h2>
      <form className="mt-10 flex flex-col gap-5 text-sm">
        <div className="border rounded-md p-5">
          <div className="flex items-center gap-10">
            <Label htmlFor="client" value="Müştəri adı" />

            <Select className="flex-1" onChange={handleChange} id="clientId">
              <option value="">Müştərini seç</option>
              {clients.map((item, index) => (
                <option value={item._id} key={index}>
                  {item.companyName}
                </option>
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
              <input
                id="checked-checkbox"
                type="checkbox"
                value="gedis"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e)=>setOpenGedis(e.target.checked)}
              />
              <span>Gediş</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value="bobcatWaranty"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setOpenBobcatWarranty(e.target.checked)}
              />
              <span>Bobcat zəmanət</span>
            </div>
            <div className="flex gap-2 items-center">
              <input
                id="checked-checkbox"
                type="checkbox"
                value="hamannWaranty"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setOpenAmmannWarranty(e.target.checked)}
              />
              <span>AMMANN zəmanət</span>
            </div>
          </div>
          {openGedis && (
          <div className="mt-10 flex flex-col gap-5">
              <div className="flex gap-5 items-center">
                <span>Hara</span>
                <TextInput />
              </div>
              <div className="flex gap-5 items-center">
                <span>Maşınla</span>
                <Select>
                  <option value=""></option>
                  <option value="">Mitsubishi L200</option>
                  <option value="">Man TGL 12.240</option>
                </Select>
              </div>
              <div className="flex gap-5 items-center">
                <span>Məsafə</span>
                <TextInput/>
                <span>Km</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>İşçilər getdi</span>
                <TextInput/>
                <span>(sürücü ilə birlikdə)</span>
              </div>
              <div className="flex gap-5 items-center">
                <span>İş saatları (səyahət daxil olmaqla)</span>
                <TextInput/>
                <span>(saat)</span>
              </div>
          </div>
        )}

        {
          openBobcatWarranty&&(
            <div className="flex items-center justify-between">
            <div className="mt-10 flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <span>Hara</span>
              <TextInput />
            </div>
            <div className="flex gap-5 items-center">
              <span>Məsafə</span>
              <TextInput/>
              <span>Km(0 km)</span>
            </div>
            <div className="flex gap-5 items-center">
              <span>Orada</span>
              <TextInput/>
              <TextInput/>
            </div>
            <div className="flex gap-5 items-center">
              <span>Oradan</span>
              <TextInput/>
              <TextInput/>
            </div>
            <div className="flex gap-5 items-center">
              <span>Səyahət vaxtı</span>
              <TextInput/>
              <span>(0 saat 0 dəqiqə)</span>
            </div>
            <div className="flex gap-5 items-center">
              <span>Kurs $</span>
              <TextInput/>
            </div>
        </div>
         <div className="flex flex-col gap-[100px]">
          <div className="flex gap-3 items-center">
            <TextInput type="radio"/>
            <span>Məsafə</span>
          </div>
          <div className="flex  gap-3 items-center">
            <TextInput type="radio"/>
            <span>Vaxt</span>
          </div>
         </div>
        </div>
          )
        }

        {
          openAmmannWarranty&&(
            <div className="mt-10 flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <span>Hara</span>
              <TextInput />
            </div>
            <div className="flex gap-5 items-center">
              <span>Məsafə</span>
              <TextInput/>
              <span>Km(0 km)</span>
            </div>
            <div className="flex gap-5 items-center">
              <span>Səyahət vaxtı</span>
              <TextInput/>
              <span>(0 saat 0 dəqiqə)</span>
            </div>
            <div className="flex gap-5 items-center">
              <span>Kurs $</span>
              <TextInput/>
            </div>
        </div>
       
          )
        }
        </div>

       

        <div className="border p-5 rounded-md flex flex-col gap-5">
          <div className="flex items-center">
            <span className="w-[300px]">Texnikanın növü</span>
            <Select onChange={handleChange} id="type">
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
            <Select onChange={handleChange} id="manufactured">
              <option value="man">MAN</option>
              <option value="mercedes">Mercedes</option>
              <option value="daf">DAF</option>
              <option value="ford">Ford</option>
              <option value="volvo">Volvo</option>
            </Select>
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">Model</span>
            <TextInput
              type="text"
              className="w-[500px]"
              onChange={handleChange}
              id="model"
            />
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">Şassi nömrəsi</span>
            <TextInput
              type="text"
              className="w-[500px]"
              onChange={handleChange}
              id="sassi"
            />
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">Maşın nömrəsi</span>
            <TextInput
              type="text"
              className="w-[500px]"
              onChange={handleChange}
              id="carNumber"
            />
          </div>
          <div className="flex  items-center">
            <span className="w-[300px]">İstehsal tarixi</span>
            <Select onChange={handleChange} id="produceDate">
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
            <TextInput
              type="text"
              className="w-[500px]"
              onChange={handleChange}
              id="km"
            />
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Dövlət nömrəsi</span>
            <TextInput
              type="text"
              className="w-[500px]"
              onChange={handleChange}
              id="qostNumber"
            />
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Ödəniş üsulu</span>
            <Select onChange={handleChange} id="paymentType">
              <option value="transfer">Köçürülmə</option>
              <option value="cash">Nağd</option>
              <option value="warranty">Qarantiya</option>
              <option value="internal">Daxili iş</option>
              <option value="pos">POS</option>
            </Select>
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">ƏDV</span>
            <input
              id="nds"
              type="checkbox"
              value="nds"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
            />
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Təkrar təmir</span>
            <input
              id="repairAgain"
              type="checkbox"
              value="repairAgain"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
            />
          </div>
          <div className="flex  items-center">
            <span className="text-sm w-[300px]">Servis məlumatı</span>
            <input
              id="servisInfo"
              type="checkbox"
              value="servisInfo"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleChange}
            />
          </div>
        </div>

        <NewCardProblems workers={workers} value={formData.problems} onValueChange={handleChange}/>
        <NewCardWorkers workers={workers} />
        <AddCharges />
        <NewCardAddParts />

        <div className="border p-5 rounded-md">
          <h2 className="font-semibold mb-5">İş haqqında şərhlər</h2>
          <Textarea
            rows={4}
            placeholder="Şərh yaz....."
            onChange={handleChange}
            id="comments"
          />
        </div>
        <div className="border p-5 rounded-md">
          <h2 className="font-semibold mb-5">Məsləhətlər</h2>
          <Textarea rows={4} onChange={handleChange} id="recommendation" />
        </div>
        <div className="flex gap-2 items-center">
          <Button color={"blue"}>Yadda Saxla</Button>
          <div className="w-[110px] flex justify-center gap-2 p-3 items-center  bg-blue-700 text-white  rounded-lg cursor-pointer hover:bg-blue-800">
            <span>Çap et</span>
            <FiPrinter />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCard;
