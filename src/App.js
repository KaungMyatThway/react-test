import logo from "./logo.svg";
import "./App.css";
import Image from "./ss.jpeg";
import { useState } from "react";

function App() {
  let [name, setName] = useState("Kaung Myat Thway");
  let changeName = () => {
    name = "aung aung";
    setName(name);
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <img src={Image} alt="Sample"></img>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
