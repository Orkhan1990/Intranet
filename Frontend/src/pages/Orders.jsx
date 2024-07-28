import { Select } from 'flowbite-react'
import { Field, Form, Formik } from 'formik'
import React from 'react'

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
                    </Form>
                </>
                )
            }
         
        </Formik>
    </div>
  )
}

export default Orders