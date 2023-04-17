import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function Layout() {
  return (
    <div>
      <header>HEADER</header>
      <Outlet></Outlet>
      <footer>footer</footer>
    </div>
  );
}
