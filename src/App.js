import { MedusaProvider } from "medusa-react";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import Home from "./components/Home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <Home></Home>
      <MedusaProvider
        queryClientProviderProps={{ client: queryClient }}
        baseUrl="http://localhost:9000"
      >
        <Products />
      </MedusaProvider>
    </div>
  );
}

export default App;
