import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function App() {
  return <div>Home
    <Link to={"/page2"}>Link a page 2</Link>
  </div>;
}
