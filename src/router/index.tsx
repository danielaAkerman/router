import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout";
import { Home } from "pages/Home";
import { Page2 } from "pages/Page2";
import { Search } from "pages/Search";
import { SearchResults } from "pages/SearchResults";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/search/:busqueda" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}
