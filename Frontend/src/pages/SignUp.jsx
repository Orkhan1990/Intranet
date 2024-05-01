import React, { useState } from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import {Link} from "react-router-dom";



const SignUp = () => {
  const[error,setError]=useState(false);
  const[success,setSuccess]=useState(false);
  const[formData,setFormData]=useState({
    username:"",
    email:"",
    password:""
  })
   console.log(formData);
  const handleChange=(e)=>{
     setFormData({...formData,[e.target.id]:e.target.value})
  }

  const handleFormSubmit=async(e)=>{
    e.preventDefault();
    if(formData.username===""||formData.email===""||formData.password===""){
      return setError("The fields is required!!")
    }
     try {
      const res = await fetch("http://localhost:3004/api/v1/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      const data=await res.json();
      console.log(data);
      if(data.success===false){
        setError(data.message);
        setSuccess("")
        return;
      }
      if(res.ok){
        setSuccess("User successfuly registered!")
      }
      setError("")
     } catch (error) {
       setError(error.message)
       setSuccess("")
     }
  }
  return (
    <div className='min-h-screen image'>
        <div className='bgFon min-h-screen flex justify-center items-center'>
            <div className='text-white w-[350px]'>
                <h1 className='text-center text-5xl font-semibold'>Sign Up</h1>
                <form  className='flex flex-col gap-3 mt-5' onSubmit={handleFormSubmit}>
                    <div>
                    <Label htmlFor="username" value="Username"  className='text-white text-md'/>
                    <TextInput id="username" type="text" placeholder="Username" required  onChange={handleChange}/>
                    </div>
                    <div>
                    <Label htmlFor="email" value="Email"  className='text-white text-md'/>
                    <TextInput id="email" type="email" placeholder="Email" required onChange={handleChange}/>
                    </div>
                    <div>
                    <Label htmlFor="password" value="Password" className='text-white text-md'/>
                    <TextInput id="password" type="password"  onChange={handleChange}/>
                    </div>
                    <Button type='submit'>Sign Up</Button>
                </form>
                <p className='mt-2 text-sm'>Have any account? <Link to={"/sign-in"} className='text-sky-300' >Sign in</Link></p>
                {
                  !error&&success&&(<p className='mt-2 text-sm text-green-300'>{success}</p>)
                }
                 {
                  error&&!success&&(<p className='mt-2 text-sm text-red-700'>{error}</p>)
                }

            </div>
        </div>
    </div>
  )
}

export default SignUp