import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";
const SignUp = () => {
  return (
    <div className='min-h-screen image'>
        <div className='bgFon min-h-screen flex justify-center items-center'>
            <div className='text-white w-[350px]'>
                <h1 className='text-center text-5xl font-semibold'>Sign Up</h1>
                <form  className='flex flex-col gap-3 mt-5'>
                    <div>
                    <Label htmlFor="username" value="Username"  className='text-white text-md'/>
                    <TextInput id="username" type="text" placeholder="Username" required />
                    </div>
                    <div>
                    <Label htmlFor="email" value="Email"  className='text-white text-md'/>
                    <TextInput id="email" type="email" placeholder="Email" required />
                    </div>
                    <div>
                    <Label htmlFor="password" value="Password" className='text-white text-md'/>
                    <TextInput id="password" type="password"  />
                    </div>
                    <Button>Sign Up</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp