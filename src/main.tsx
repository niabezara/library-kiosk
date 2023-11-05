import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { PaginationProvider } from "./context/PaginationContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import { LibraryProvider } from "./context/LibraryContext.tsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LibraryProvider>
          <AuthProvider>
            <PaginationProvider>
              <App />
            </PaginationProvider>
          </AuthProvider>
        </LibraryProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
