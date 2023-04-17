import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function SearchResults() {
  const query = useParams();
  const busqueda = query.busqueda;
  const [results, setResults] = useState([]);

  async function pullResults(q) {
    const response = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + q
    );
    const json = await response.json();
    console.log(json);
    setResults(json.results);
  }
  useEffect(() => {
    pullResults(busqueda);
  }, [busqueda]);
  return (
    <ul>
      {results.map((r) => (
        <li style={{ border: "solid" }} key={r.id}>
          <Link to={"/item/" + r.id}>
            <img src={r.thumbnail} alt="" />
            {r.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
