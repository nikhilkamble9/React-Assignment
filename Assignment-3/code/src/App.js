import React from "react";
import "./App.css";
import Customerinfo from "./components/Customerinfo";
import Navbar from "./components/Navbar";
import Orderinfo from "./components/Orderinfo";
import Profileinfo from "./components/Profileinfo";

function App() {
  const details = {
    Appointment: "12:30 (31-03-2022)",
    Email: "xyz@gmail.com",
    Phone: "8562145001",
  };

  return (
    <div classNameName="site-container">
      <Navbar />
      <Customerinfo info={details} />
      <Orderinfo />
      <Profileinfo />
    </div>
  );
}

export default App;
