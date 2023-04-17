import React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Page2 } from "./Page2";
import { Layout } from "./Layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="page2" element={<Page2 />} />
      </Route>
    </Routes>
  );
}