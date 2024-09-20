import Home from "./components/Home";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Services</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
