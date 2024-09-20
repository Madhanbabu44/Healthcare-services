import React, { useState } from "react";
import Services from "./Services";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";
const Create = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [des, setdes] = useState("");
  const [price, setprice] = useState("");

  const handleclick = (e) => {
    e.preventDefault();

    if (name === "" || des === "" || price === "") {
      alert("Invalid input");
      return;
    }

    const newId =
      Services.length > 0 ? Services[Services.length - 1].id + 1 : 1;
    Services.push({
      id: newId,
      Name: name,
      Des: des,
      Price: price,
    });

    navigate("/");
  };

  return (
    <div className="create">
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setdes(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Price"
          onChange={(e) => setprice(e.target.value)}
          required
        />
        <button onClick={handleclick}>Submit</button>
        <Link to="/">Home</Link>
      </form>
    </div>
  );
};

export default Create;
