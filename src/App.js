import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebare from "./components/common/Sidebare";
import Mybacklog from "./pages/Mybacklog";
import Mykanban from "./pages/Mykanban";
import Register from "./components/users/Register";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex">
      <div className=""><Sidebare /></div>
      {/* className="w-10/12 p-4 h-screen" */}
      <div>
        <Routes>
          <Route path="/" element={<Mybacklog />} />
          <Route path="/kanban" element={<Mykanban />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
