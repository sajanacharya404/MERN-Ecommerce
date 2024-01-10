import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/register" element={<Registerpage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
