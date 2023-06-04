import React from "react";
import ReactDOM from "react-dom/client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { QueryClientProvider } from "@tanstack/react-query";
import { StyledEngineProvider } from "@mui/material";

import App from "./App";
import { queryClient } from "./api/queryClient";

import "./styles/global.css";
import CartProvider from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </QueryClientProvider>
      </StyledEngineProvider>
    </CartProvider>
  </React.StrictMode>
);
