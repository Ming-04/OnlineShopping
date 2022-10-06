import React from "react";

function Header({myCart, setModalIsOpen}) {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">SHINE</a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">WOMEN</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">CURVE+PLUS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">KIDS</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">MEN</a>
                </li>
                </ul>
                <form className="d-flex">
                  <button className="btn btn-outline-success" onClick={() => setModalIsOpen(true)}>Cart {myCart.length}</button>
                </form>
              </div>
          </div>
        </nav>
    );
}

export default Header;