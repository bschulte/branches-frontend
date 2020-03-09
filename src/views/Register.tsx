import React, { useState } from "react";

import { Header } from "../components/shared/Header";
import { Input } from "../components/shared/Input";
import { Button } from "../components/shared/Button";
import { Divider } from "../components/shared/Divider";
import { networkService } from "../services/network.service";
import { useToast } from "../hooks/toast.hook";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const { info } = useToast();

  const registerNewUser = async () => {
    try {
      const response = await networkService.post("/users/register", {
        name,
        email
      });
      console.log("Response:", response);

      info(
        `Account was requested. You'll receive an email once the account has been approved`
      );
    } catch (err) {
      console.log("Error with user registration:", err);
    }
  };

  const login = async () => {
    try {
      const response = await networkService.post<{ token: string }>(
        "/users/login-with-code",
        {
          accessCode: code
        }
      );

      localStorage.setItem("token", response.token);
      window.location.reload();
    } catch (err) {
      console.log("Error logging in:", err);
    }
  };

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

      <Button onClick={registerNewUser}>Register</Button>

      <Divider />

      <p>Already have an access code? Enter it here.</p>

      <Input
        value={code}
        onChange={e => setCode(e.currentTarget.value)}
        placeholder="Access Code"
      />
      <Button onClick={login}>Login</Button>
    </div>
  );
};
