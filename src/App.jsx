import { Route, Routes } from "react-router-dom";
import "./App.css";
import Catalogo from "./components/pages/Catalogo";
import Carrinho from "./components/pages/Carrinho";
import Navbar from "./components/Navbar/index"

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Catalogo />} />

          <Route path="/cart" element={<Carrinho />} />
        </Routes>
    </>
  );
}

export default App;
