import React from "react";
import { Button, Label, TextInput } from "flowbite-react";

function Register() {
  return (
    <>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Your UserName" />
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="name@email.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>

        <Button type="submit">Register</Button>
      </form>
    </>
  );
}

export default Register;
