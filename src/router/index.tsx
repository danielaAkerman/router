import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { App } from "pages/App";
import { Page2 } from "pages/Page2";
import { Search } from "pages/Search";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/page2" element={<Page2 />} />
      </Route>
      <Route path="/search/:busqueda" element={<Search />} />
    </Routes>
  );
}
