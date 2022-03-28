import React from 'react'
import './App.css';
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import EasterEgg from "./components/EasterEgg/EasterEgg";

function App() {
  return (
    <div className="wrapper">
        <div className="header">
            <h2>Shopping Cart Demo</h2>
        </div>
        <ShoppingCartPage/>
        <EasterEgg/>
    </div>
  );
}

export default App;
