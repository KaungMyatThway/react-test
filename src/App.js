import logo from './logo.svg';
import './App.css';
import Image from './ss.jpeg'

function App() {
  let name = "Kaung Myat Thway"
  return (
    <div className="App">
       <h1>{name}</h1>
       <img src={Image} alt="Sample"></img>
    </div>
  );
}

export default App;
