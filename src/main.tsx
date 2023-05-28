import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { QueryClientProvider } from "@tanstack/react-query";
import { StyledEngineProvider } from "@mui/material";

import App from "./App";
import { queryClient } from "./api/queryClient";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);
