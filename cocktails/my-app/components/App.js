import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/accueil" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
