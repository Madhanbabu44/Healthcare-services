import React, { useEffect, useState } from "react";
import Services from "./Services";
import { useNavigate, Link } from "react-router-dom";
import './Style.css'
const Edit = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [des, setdes] = useState("");
  const [price, setprice] = useState("");
  const [id, setid] = useState(null);

  useEffect(() => {
    setid(Number(localStorage.getItem("id")));
    setname(localStorage.getItem("Name"));
    setdes(localStorage.getItem("Des"));
    setprice(localStorage.getItem("Price"));
  }, []);

  const handleclick = (e) => {
    e.preventDefault();

    if (name === "" || des === "" || price === "") {
      alert("Invalid input");
      return;
    }

    const index = Services.findIndex((e) => e.id === id);
    if (index === -1) {
      alert("Invalid service id");
      return;
    }

    Services[index] = { id, Name: name, Des: des, Price: price };
    navigate("/");
  };

  return (
    <div className="edit">
      <form>
        <input
          value={name}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
        />
        <textarea
          value={des}
          placeholder="Description"
          onChange={(e) => setdes(e.target.value)}
        />
        <input
          value={price}
          type="text"
          placeholder="Enter Price"
          onChange={(e) => setprice(e.target.value)}
        />
        <button type="button" onClick={handleclick}>Update</button>
        <Link to="/">Home</Link>
      </form>
    </div>
  );
};

export default Edit;
