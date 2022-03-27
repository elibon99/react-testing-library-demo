import React from 'react'
import './App.css';
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";

function App() {
  return (
    <div className="wrapper">
        <div className="header">
            <h2>Shopping Cart Demo</h2>
        </div>
        <ShoppingCartPage/>
    </div>
  );
}

export default App;
