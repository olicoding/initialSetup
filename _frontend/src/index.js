import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/base/reset.scss";
import "./styles/base/index.scss";
import ContextProvider, { Context } from "./context/ContextProvider";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import Eshop from "./pages/Eshop";
import NotFound from "./pages/NotFound";

function AppWrapper() {
  const { user } = useContext(Context);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {user ? <Route path="/eshop" element={<Eshop />} /> : null}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

const root = document.getElementById("root");
const appRoot = createRoot(root);

appRoot.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AppWrapper />} />
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
