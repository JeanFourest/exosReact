import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className="navbarBody">
      <Link to="/todo" className="links">
        TODO
      </Link>
      <Link to="/compteur" className="links">
        COMPTEUR
      </Link>
      <Link to="/profil/1" className="links">
        PROFIL
      </Link>
      <Link to="/products" className="links">
        PRODUCTS
      </Link>
      <Link to="/films" className="links">
        FILMS
      </Link>

      <p className="links">{location.pathname}</p>
    </div>
  );
}
