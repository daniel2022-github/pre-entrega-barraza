import "./Navbar.css";
import CartWidget from "../cartwidget/CartWidget";
import Carrito from "../../image/carrito.png";
import Logo from "../../image/logocafe.png";

const Navbar = () => {
  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg bg-body-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="logo" width="30" />
            Sr. Café
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Maquinas
                </a>
              </li>

              <button type="button" className="btn btn-orange">
                <img src={Carrito} alt="logo" width="20" />
                <span className="badge text-bg-secondary">4</span>
              </button>
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget />
    </div>
  );
};

export default Navbar;
