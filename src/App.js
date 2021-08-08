import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Record from "./component/Record";
import "./App.css";

import Login from "./component/Login";
import SignUp from "./component/Sign";

function App() {
  let history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      history?.push("/record-up");
    }
  });
  const LogoutHandle = () => {
    localStorage.clear();
  };
  return (
    <>
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/record-up"}>
                      Record
                    </Link>
                  </li>

                  {localStorage.getItem("user") !== null && (
                    <li className="nav-item" onClick={LogoutHandle}>
                      <Link className="nav-link" to={"/"}>
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/sign-in" component={Login} />
                <Route path="/sign-up" component={SignUp} />
                <Route exact path="/record-up" component={Record} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
