import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./Products";

function App() {
    return (
        <div className="App">
            <Products />
            <Routes>
                <Route path="/produits" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
