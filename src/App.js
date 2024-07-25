import {Routes, Route,Router, Switch, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import CardList from "./CardList";

function App() {
    return (
        <BrowserRouter>
        <Navigation />
        <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/products" element={<CardList />} />
                
        </Routes>
        </BrowserRouter>
    );
}

export default App;