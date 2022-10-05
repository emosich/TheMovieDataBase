import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import MovieDetail from "./components/MovieDetail";
import Login from "./components/Login";

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/moviedetail" element={<MovieDetail />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
