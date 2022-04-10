import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Postview from "./components/Postview";
import Firstpage from "./components/Firstpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Firstpage />}></Route>
          <Route path="/post" element={<Postview />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
