import Home from "./pages/Home";
import Herds from "./pages/Herds";
import Vaccinating from "./pages/Vaccinating";
import Sicks from "./pages/Sicks";
import HeatWatch from "./pages/HeatWatch";
import Breds from "./pages/Breds";
import Opens from "./pages/Opens";
import MainHerd from "./pages/MainHerd";
import Fats from "./pages/Fats";
import Feeders from "./pages/Feeders";
import History from "./pages/History";
import RecentActivity from "./pages/RecentActivity";
import CowDetailPage from "./pages/CowDetailPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herds" element={<Herds />} />
        <Route path="/vaccinating" element={<Vaccinating />} />
        <Route path="/sicks" element={<Sicks />} />
        <Route path="/heat-watch" element={<HeatWatch />} />
        <Route path="/breds" element={<Breds />} />
        <Route path="/opens" element={<Opens />} />
        <Route path="/main-herd" element={<MainHerd />} />
        <Route path="/fats" element={<Fats />} />
        <Route path="/feeders" element={<Feeders />} />
        <Route path="/history" element={<History />} />
        <Route path="/recent-activity" element={<RecentActivity />} />
        <Route path="/cows/:id" element={<CowDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
