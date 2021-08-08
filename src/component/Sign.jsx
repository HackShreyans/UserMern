import React from "react";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: ""
  });
  const submitHandle = e => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    fetch(`${process.env.REACT_APP_API}/User/api/post`, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(user)
    })
      .then(function (res) {
        // console.log("response", res?.statusText);
        alert(res?.statusText);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
          confirmpassword: ""
        });
      })
      .catch(({ Response }) => {
        alert(Response?.data?.mesaage);
      });
  };
  const handleInputs = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
    console.log("CurrentChanges", e.target.id, e.target.value);
  };
  return (
    <>
      <h3>Sign Up</h3>
      <form onSubmit={submitHandle}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={handleInputs}
            className="form-control"
            placeholder="username"
          />
        </div>

        <div className="form-group">
          <label>email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleInputs}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>phone</label>
          <input
            type="phone"
            id="phone"
            value={user.phone}
            onChange={handleInputs}
            className="form-control"
            placeholder="phone number"
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
          <label>ConfirmPassword</label>
          <input
            type="password"
            id="confirmpassword"
            value={user.confirmpassword}
            onChange={handleInputs}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
      </form>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </>
  );
};

export default Signup;
