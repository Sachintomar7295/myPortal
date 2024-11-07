import React from "react";
import { Link } from "react-router-dom";
// import transitions from "bootstrap";
// import logo from '../logo.svg';
// import '../../../node_modules/bootstrap-icons';

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;
  return (
    <nav className="navbar1 navbar-expand-lg navbar-light bg-light">
      {/* <img src="logo.png" className="App-logo-s" alt="logo" /> */}
      <h3 className="brand"><i>Serotonin</i></h3>
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar2 navbar-toggleable-md navbar-light">
            <button
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    <i class="bi bi-house"></i>
                    HOME
                  </li>
                </Link>
                <Link to="/journals" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "blogs" ? "active" : ""
                    }`}
                    onClick={() => setActive("blogs")}
                  >
                    <i class="bi bi-journal-bookmark-fill"></i>
                    JOURNALS
                  </li>
                </Link>

                <Link to="/create" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => setActive("create")}
                  >
                    <i class="bi bi-plus-circle"></i>
                    CREATE
                  </li>
                </Link>

                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}
                  >
                    <i class="bi bi-file-earmark-person"></i>
                    ABOUT
                  </li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        {/* <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="logo"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            marginTop: "12px",
                          }}
                        /> */}
                        <p style={{ paddingTop: "18px", marginTop: "15px", marginLeft: "5px", marginRight: "1.2em", textTransform: "uppercase", fontSize: "1.3em", textAlign: "center" , textDecoration: "underline"}}>
                        <i class="bi bi-person-circle">{user?.displayName}</i>
                      </p>
                      </div>
                      {/* <p style={{ marginTop: "12px", marginLeft: "5px", textTransform: "uppercase", fontSize: "1.3em", textAlign: "center" , textDecoration: "underline"}}>
                        {user?.displayName}
                      </p> */}
                      <li className="nav-item nav-link" onClick={handleLogout} style={{cursor: "pointer", paddingTop: "35px"}}>
                      <i class="bi bi-person-dash"></i>
                        LOGOUT
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        }`}
                        onClick={() => setActive("login")}
                        style={{cursor: "pointer", paddingTop: "25px"}}
                      >
                        <i class="bi bi-person-add"></i>
                        LOGIN
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;