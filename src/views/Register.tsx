import React, { useState } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/shared/Input";
import { Button } from "../components/shared/Button";
import { Divider } from "../components/shared/Divider";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  return (
    <div className="w-2/4 mx-auto mt-16">
      <Header text="Register Here" />

      <p>
        If you need access to access to the site please enter your information
        here:{" "}
      </p>

      <Input
        value={name}
        onChange={e => setName(e.currentTarget.value)}
        placeholder="Name"
      />
      <Input
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
        placeholder="Email"
      />

      <Button>Register</Button>

      <Divider />

      <p>Already have an access code? Enter it here.</p>

      <Input
        value={code}
        onChange={e => setCode(e.currentTarget.value)}
        placeholder="Access Code"
      />
      <Button>Login</Button>
    </div>
  );
};