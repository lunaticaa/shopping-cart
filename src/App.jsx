import "./App.css";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/Products" Component={Products} />
        <Route exact path="/Products/:id" Component={Product} />
        <Route exact path="/cart" Component={Cart} />
      </Routes>
    </>
  );
}

export default App;
