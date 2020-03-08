import React, { useEffect, useState } from "react";
import { NetworkService } from "./services/network.service";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(true);

  const network = new NetworkService();

  useEffect(() => {
    const getData = async () => {
      const result = await network.jsonGet("/users/verify-auth");

      setValue(result);

      setLoading(false);
    };

    getData();
  });

  if (loading) {
    return <span>Loading...</span>;
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
