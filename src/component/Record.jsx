import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Record.css";

const Record = () => {
  const [data, setData] = useState([]);
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      history.push("/");
    }
  });
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/User/api/get`).then(result => {
      result.json().then(resp => {
        //  console.warn("resp", resp);
        setData(resp?.data);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">phone</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        {data.length > 0 &&
          data.map(item => (
            <tr>
              <th scope="col">{item.username}</th>
              <th scope="col">{item.email}</th>
              <th scope="col">{item.phone}</th>
              <th scope="col">{item.password}</th>
            </tr>
          ))}
      </table>
    </>
  );
};

export default Record;
