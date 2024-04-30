import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const SignIn = () => {
  return (
    <div className='min-h-screen image'>
        <div className='bgFon min-h-screen flex justify-center items-center'>
            <div className='text-white w-[350px]'>
                <h1 className='text-center text-5xl font-semibold'>Log In</h1>
                <form  className='flex flex-col gap-3 mt-5'>
                    <div>
                    <Label htmlFor="username" value="Username"  className='text-white text-md'/>
                    <TextInput id="username" type="text" placeholder="Username" required />
                    </div>
                    <div>
                    <Label htmlFor="password" value="Password" className='text-white text-md'/>
                    <TextInput id="password" type="password"  />
                    </div>
                    <Button>Sign In</Button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignIn