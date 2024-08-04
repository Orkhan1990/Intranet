import {
  Button,
  Checkbox,
  Select,
  Table,
  Textarea,
  TextInput,
} from "flowbite-react";
import { Field, FieldArray, Form, Formik } from "formik";
import PartsList from "../components/PartsList";
import React from "react";

const orderInitialValues = {
  project: "",
  cardNumber: 0,
  orderType: "",
  client: "",
  manufacturer: "",
  model: "",
  sassiNumber: "",
  carNumber: "",
  productionDate: "",
  km: "",
  qostNumber: "",
  payment: "",
  deliverPeriod: "",
  deliverType: "",
  initialPayment: "",
  comment: "",
  oil: "",
  parts: [
    {
      partNumber: "",
      count: 0,
      partName: "",
    },
  ],
};

const years=["2024","2023","2022","2021","2020","2019","2018"]
const Orders = () => {
  const onSubmit = (props, values) => {
    console.log(values);
  };

  return (
    <div className="p-5">
      <h2 className="text-center mt-10 mb-10 font-semibold">
        Ehtiyyat hissələrin sifarişi
      </h2>
      <Formik initialValues={orderInitialValues} onSubmit={onSubmit}>
        {({ props, values }) => (
          <Form className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Proyekt
              </label>
              <Field as={Select} className="w-[200px]" name="project">
                <option value=""></option>
                <option value="project1">Project1</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Kart nömrəsi
              </label>
              <Field as={Select} className="w-[200px]">
                <option value=""></option>
                <option value="555555">555555</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Sifariş növü
              </label>
              <Field as={Select} className="w-[200px]">
                <option value="standart">Standart(müştəri)</option>
                <option value="localMarket">Yerli bazar</option>
                <option value="stok">Anbar</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Müştəri
              </label>
              <Field as={Select} className="w-[200px]">
                <option value="standart">İmprotex</option>
                <option value="localMarket">Avrora</option>
                <option value="stok">Zqan</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                İstehsalçı
              </label>
              <Field as={Select} className="w-[200px]">
                <option value="standart">Man</option>
                <option value="localMarket">Terex</option>
                <option value="stok">Gates</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Model
              </label>
              <Field as={TextInput} type="text" className="w-[400px]" />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Şassi nömrəsi
              </label>
              <Field as={TextInput} type="text" className="w-[400px]" />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Maşın nömrəsi
              </label>
              <Field as={TextInput} type="text" className="w-[400px]" />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                İstehsal tarixi
              </label>
              <Field as={Select} className="w-[200px]">
                {
                    years.map((year,index)=>(
                        <option value={year}>{year}</option>
                    ))
                }
               
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Yürüş/saat
              </label>
              <Field as={TextInput} type="text" className="w-[400px]" />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Lisenziya nömrəsi
              </label>
              <Field as={TextInput} type="text" className="w-[400px]" />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Ödəniş üsulu
              </label>
              <Field as={Select} className="w-[200px]">
                <option value="transfer">Köçürmə</option>
                <option value="cash">Nağd</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Çatdırılma müddəti
              </label>
              <Field as={Select} className="w-[200px]">
                <option value="urgentDeliver">Təcili(7-15 gün)</option>
                <option value="secondUrgentDeliver">
                  Orta təcili(15-30 gün)
                </option>
                <option value="deliverInPlan">Planlı(40-60 gün)</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Çatdırılma üsulu
              </label>
              <Field as={Select} className="w-[200px]">
                <option value="standart">Standart</option>
                <option value="simple">Sadələşdirilmiş</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                İlkin ödəniş
              </label>
              <Field as={Select} className="w-[200px]">
                <option value="0">0%</option>
                <option value="65">65%</option>
              </Field>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Şərh
              </label>
              <Field as={Textarea} row={10} type="text" className="w-[600px]" />
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="" className="w-[100px]">
                Yağ
              </label>
              <Field as={Checkbox} type="checkbox" />
            </div>
            <FieldArray name="parts">
              {({ push, remove }) => (
                <div className="flex items-center gap-5">
                  <Table>
                    <Table.Head>
                      <Table.HeadCell> №</Table.HeadCell>
                      <Table.HeadCell>Detalın nömrəsi</Table.HeadCell>
                      <Table.HeadCell>Sayı</Table.HeadCell>
                      <Table.HeadCell>Anbarda</Table.HeadCell>
                      <Table.HeadCell>Adı</Table.HeadCell>
                      <Table.HeadCell></Table.HeadCell>
                      <Table.HeadCell></Table.HeadCell>
                      <Table.HeadCell></Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                      <>
                        {values.parts.map((_, index) => (
                          <PartsList
                            name={`parts[${index}]`}
                            values={values.parts[index]}
                            push={push}
                            remove={remove}
                            index={index}
                            key={index}
                          />
                        ))}
                      </>
                    </Table.Body>
                  </Table>
                </div>
              )}
            </FieldArray>
            <div className="flex gap-2">
              <Button color="blue">Yadda saxla</Button>
              <Button color="blue">Təsdiqlə</Button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex">
        <div className="flex-1 "></div>
        <div className=" h-full flex-1 ">
          <div className="border p-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Sifarişdən şikayətlər</label>
              <Textarea rows={5} />
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="">Geriyə qaytarmaq</label>
              <div className="flex gap-4 ">
                <Select className="flex-1">
                  <option value=""></option>
                </Select>
                <Select className="flex-1">
                  <option value=""></option>
                </Select>
              </div>
            </div>

          </div>
          <div className="border flex flex-col gap-2 mt-5 p-4">
            <h2>Şərh yaz</h2>
            <Textarea/>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <h2>Tarixçə</h2>
      </div>
    </div>
  );
};

export default Orders;
