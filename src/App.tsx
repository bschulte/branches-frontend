import React, { useEffect, useState } from "react";
import { networkService } from "./services/network.service";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Register } from "./views/Register";
import { IUser } from "./interfaces/IUser";

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await networkService.get<IUser>("/users/verify-auth");

        setUser(result);
      } catch (err) {
        console.log("Error validating auth:", err);
      }

      setLoading(false);
    };

    getData();
  });

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return <Register />;
  }

  return (
    <Router>
      <Switch>
        <Route path="/register">
          <div>Testing</div>
        </Route>
        <Route path="/">
          <div>Testing</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
