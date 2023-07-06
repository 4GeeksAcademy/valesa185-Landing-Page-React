import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const [showNavItems, setShowNavItems] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Cambia el estado showNavItems dependiendo del ancho de la pantalla
      if (window.innerWidth <= 768) {
        setShowNavItems(false); // Oculta los elementos de navegación
      } else {
        setShowNavItems(true); // Muestra los elementos de navegación
      }
    };

    // Agrega un controlador de evento para el cambio de tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Limpia el controlador de eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-md">
        {/* Titulo de la pagina */}
        <a className="navbar-brand">{props.title}</a>

        {/* Contenido dentro del collapse */}
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Botón de hamburguesa */}
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

        {/* Elementos de navegación fuera del collapse */}
        {showNavItems && (
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
