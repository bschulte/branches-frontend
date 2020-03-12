import React, { useEffect, useState } from "react";
import { networkService } from "./services/network.service";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { useDispatch, useSelector } from "react-redux";

import { Register } from "./views/Register";
import { IUser } from "./interfaces/IUser";
import { Toast } from "./components/shared/Toast";
import { Navbar } from "./components/Navbar";
import { setUser } from "./redux/slices/auth.slice";
import { IRootState } from "./redux/IRootState";
import { Dashboard } from "./views/Dashboard";
import { Admin } from "./views/Admin";

function App() {
  const [loading, setLoading] = useState(true);

  const { user } = useSelector((state: IRootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await networkService.get<IUser>("/users/verify-auth");

        dispatch(setUser(result));
      } catch (err) {
        console.log("Error validating auth:", err);
      }

      setLoading(false);
    };

    getData();
  }, [dispatch]);

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Router>
    </ToastProvider>
  );
}

export default App;
