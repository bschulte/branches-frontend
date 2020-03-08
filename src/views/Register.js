import React, { useState, useEffect } from "react";
import { NetworkService } from "../services/network.service";

export const Register = () => {
  const [user, setUser] = useState(null);
  const network = new NetworkService();

  useEffect(() => {
    const fetchData = async () => {
      const user = await network.jsonGet("/users");
    };

    fetchData();
  }, [network]);

  return <div></div>;
};
