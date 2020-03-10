import React, { useEffect, useState } from "react";
import { networkService } from "./services/network.service";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import { Register } from "./views/Register";
import { IUser } from "./interfaces/IUser";
import { Toast } from "./components/shared/Toast";
import { Navbar } from "./components/Navbar";

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
    return (
      <ToastProvider components={{ Toast }}>
        <Register />
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <div>Testing</div>
          </Route>
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
