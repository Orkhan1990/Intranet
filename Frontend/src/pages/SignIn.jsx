import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

const SignIn = () => {
  return (
    <div className="image min-h-screen w-full relative">
      <div className="blackFon min-h-screen flex items-center justify-center ">
        <div className="text-white flex flex-col gap-10 w-[300px]">
            <h1 className="text-5xl text-center">Sign In</h1>
            <form  className="flex flex-col gap-3">
                <div>
                    <Label htmlFor="email1" value="Username" />
                    <TextInput id="email1" type="text" placeholder="name@flowbite.com" required />
                </div>
                <div>
                <Label htmlFor="password" value="Password" />
                    <TextInput id="password" type="password"  />
                </div>
                <Button type="submit">Sign In</Button>
            </form>

            </div>
      </div>
    </div>
  );
};

export default SignIn;
