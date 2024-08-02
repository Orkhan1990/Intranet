import { Checkbox, Select, Textarea, TextInput } from 'flowbite-react';
import { Field, Form, Formik } from 'formik';
import React from 'react';

const Orders = () => {



    
  return (
    <div className='min-h-screen p-5'>
        <h2 className='text-center mt-10 mb-10'>Ehtiyyat hissələrin sifarişi</h2>
        <Formik>
            {
                (props)=>(
                <>
                    <Form>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Proyekt</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value=""></option>
                                <option value="project1">Project1</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Kart nömrəsi</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value=""></option>
                                <option value="555555">555555</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Sifariş növü</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="standart">Standart(müştəri)</option>
                                <option value="localMarket">Yerli bazar</option>
                                <option value="stok">Anbar</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Müştəri</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="standart">İmprotex</option>
                                <option value="localMarket">Avrora</option>
                                <option value="stok">Zqan</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">İstehsalçı</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="standart">Man</option>
                                <option value="localMarket">Terex</option>
                                <option value="stok">Gates</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Model</label>
                            <Field as={TextInput} type="text" className="w-[200px]" />    
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Şassi nömrəsi</label>
                            <Field as={TextInput} type="text" className="w-[200px]" />    
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Maşın  nömrəsi</label>
                            <Field as={TextInput} type="text" className="w-[200px]" />    
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">İstehsal tarixi</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Yürüş/saat</label>
                            <Field as={TextInput} type="text" className="w-[200px]" />    
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Lisenziya nömrəsi</label>
                            <Field as={TextInput} type="text" className="w-[200px]" />    
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Ödəniş üsulu</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="transfer">Köçürmə</option>
                                <option value="cash">Nağd</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Çatdırılma müddəti</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="urgentDeliver">Təcili(7-15 gün)</option>
                                <option value="secondUrgentDeliver">Orta təcili(15-30 gün)</option>
                                <option value="deliverInPlan">Planlı(40-60 gün)</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Çatdırılma üsulu</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="standart">Standart</option>
                                <option value="simple">Sadələşdirilmiş</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">İlkin ödəniş</label>
                            <Field as={Select} className="w-[200px]" >
                                <option value="0">0%</option>
                                <option value="65">65%</option>
                            </Field>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Lisenziya nömrəsi</label>
                            <Field as={Textarea} row={5} type="text" className="w-[200px]" />    
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="">Yağ</label>
                            <Field as={Checkbox}  type="checkbox"  />    
                        </div>
                    </Form>
                </>
                )
            }
         
        </Formik>
    </div>
  )
}

export default Orders