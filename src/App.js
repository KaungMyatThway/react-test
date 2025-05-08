import logo from "./logo.svg";
import "./App.css";
import Image from "./ss.jpeg";
import { useState } from "react";

function App() {
  let [name, setName] = useState("Kaung Myat Thway");
  let [posts,setPosts] = useState([
    {
      id : 1,
      title: "first post"
    },
    {
      id : 2,
      title: "second post"
    },
    {
      id : 3,
      title: "third post"
    }
  ])

  let changeName = () => {
    name = "aung aung";
    setName(name);
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <img src={Image} alt="Sample"></img>
      <button onClick={changeName}>Change Name</button>

      <h1>Post Lists</h1>
      <ul>
        {
          posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
