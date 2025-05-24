import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext"; // PokemonProvider 추가
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail"; // detail 페이지 import

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dex" element={<Dex />} />
          <Route path="/detail" element={<Detail />} /> {/* detail 라우트 추가 */}
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
