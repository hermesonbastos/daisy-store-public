import { Route, Routes } from "react-router-dom";
import "./App.css";
import Catalogo from "./components/pages/Catalogo";
import Carrinho from "./components/pages/Carrinho";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Catalogo />} />

        <Route path="/cart" element={<Carrinho />} />
      </Routes>
    </>
  );
}

export default App;
