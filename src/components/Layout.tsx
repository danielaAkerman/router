import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SearchForm } from "./SearchForm";

export function Layout() {
  return (
    <div>
      <header>
        <SearchForm />
      </header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
}
