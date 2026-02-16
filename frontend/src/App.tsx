import Home from "./pages/Home";
import CowDetail from "./pages/CowDetail";
import Cows from "./pages/Cows";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cows" element={<Cows />} />
        <Route path="/cows/:id" element={<CowDetail />} />
      </Routes>
    </>
  );
}

export default App;
