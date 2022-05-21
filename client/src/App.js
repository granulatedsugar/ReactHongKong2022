import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Menu from "./views/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Menu />
    </div>
  );
}

export default App;
