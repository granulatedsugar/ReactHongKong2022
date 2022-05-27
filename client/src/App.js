import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Menu from "./views/Menu";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import Product from "./views/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
