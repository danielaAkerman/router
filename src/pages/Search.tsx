import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function Search() {
  const params = useParams();
  useEffect(() => {
    console.log("Fetch usando", params.busqueda);
  }, [params.busqueda]);

  return <div>Search</div>;
}
