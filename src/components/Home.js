import React from "react";
import Service from "./Services";
import { Link, useNavigate } from "react-router-dom";
import './Style.css'
const Home = () => {
  const navigate = useNavigate();

  function setid(id, Name, Des, Price) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Des", Des);
    localStorage.setItem("Price", Price);
  }

  function del(id) {
    const index = Service.findIndex((e) => e.id === id);
    if (index !== -1) {
      Service.splice(index, 1);
      navigate("/");
    }
  }

  return (
    <div className="Home">
      {Service.map((item, index) => (
        <div key={index}>
          <h2>{item.Name}</h2>
          <p>{item.Des}</p>
          <h5>Price : {item.Price}/-</h5>
          <Link to="/edit">
            <button onClick={() => setid(item.id, item.Name, item.Des, item.Price)}>Update</button>
          </Link>
          <button onClick={() => del(item.id)}>Delete</button>
        </div>
      ))}
      <Link to="/create">
        <button>Create</button>
      </Link>
    </div>
  );
};

export default Home;
