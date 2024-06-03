import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";

const NewClient = () => {
  const[formData,setFormData]=useState([]);


  return (
    <div className="min-h-screen ">
      <div className="m-10 max-w-2xl mx-auto">
        <h2 className="text-2xl text-center font-semibold">Yeni müştəri</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="şirkət" value="Şirkət adı" />
            <TextInput
              id="şirkət"
              type="text"
              placeholder="Şirkət adı"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="şirkətNümayəndəsi" value="Şirkət nümayəndəsi" />
            <TextInput
              id="şirkətNümayəndəsi"
              type="text"
              placeholder="Şirkət nümayəndəsi"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="telefon" value="Telefon nömrəsi" />
            <TextInput
              id="telefon"
              type="text"
              placeholder="Telefon nömrəsi"
              required
              onChange={handleChange}

            />
          </div>

          <div>
            <Label htmlFor="address" value="Ünvan" />
            <TextInput id="address" type="text" placeholder="Ünvan" required onChange={handleChange}/>
          </div>

          <div>
            <Label htmlFor="rekvizit" value="Rekvizit" />
            <Textarea
              id="rekvizit"
              type="text"
              placeholder="Rekvizitlər...."
              rows={4}
              required
              onChange={handleChange}

            />
          </div>
          <div>
            <Label htmlFor="voen" value="Vöen" />
            <TextInput id="voen" type="text" placeholder="Vöen" required />
          </div>

          <div>
            <Label htmlFor="contractNumber" value="Müqavilə nömrəsi" />
            <TextInput
              id="contractNumber"
              type="text"
              placeholder="Müqavilə nömrəsi"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="contractDate" value="Müqavilə tarixi" />
            <TextInput
              id="contractDate"
              type="text"
              placeholder="Müqavilə tarixi"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="submitPerson" value="Təsdiq edən şəxs" />
            <TextInput
              id="submitPerson"
              type="text"
              placeholder="Təsdiq edən şəxs"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="1ccode" value="1C kod" />
            <TextInput id="1ccode" type="text" placeholder="1C kod" required onChange={handleChange}/>
          </div>
          <div className="flex gap-20">
          <div>
            <Label htmlFor="tipi" value="Tipi" />
            <Select id="tipi" required  onChange={handleChange}>
              <option>Müştəri</option>
              <option>Işçi</option>
              <option>Təsisçi</option>
              <option>İTB</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="fizikiHuquqi" value="FizikiHüquqi" />
            <Select id="fizikiHuquqi" required>
              <option>Fiziki</option>
              <option>Hüquqi</option>
            </Select>
          </div>
          </div>
          <Button color="blue" className="w-[200px]">Yadda Saxla</Button>
        </form>
      </div>
    </div>
  );
};

export default NewClient;
