import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  let history = useHistory();
  const submitHandle = e => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(`${process.env.REACT_APP_API}/User/api/login`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(user)
    })
      .then(res => res.text())
      .then(function (res) {
        console.log("response", res);
        alert(res);
        localStorage.setItem("user", JSON.stringify(user));
        setUser({
          username: "",
          password: ""
        });
        history.push("/record-up");
      })
      .catch(({ Response }) => {
        alert(Response?.data);
        console.log(Response);
      });
  };
  const handleInputs = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
    console.log("CurrentChanges", e.target.id, e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={handleInputs}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={handleInputs}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </>
  );
};

export default Login;
