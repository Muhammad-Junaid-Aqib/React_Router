// import './App.css';
import { Routes, Route,Link } from "react-router-dom";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <header  >
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/> 

        </Routes>
        <h1> Footer </h1>
      </header>
    </div>
  );
}

export default App;
