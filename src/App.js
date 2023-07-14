import { CartProvider, MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="min-h-screen bg-background">
      <MedusaProvider
        queryClientProviderProps={{ client: queryClient }}
        baseUrl="http://localhost:9000"
      >
        <CartProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
            </Routes>
          </Router>
        </CartProvider>
      </MedusaProvider>
    </div>
  );
}

export default App;
