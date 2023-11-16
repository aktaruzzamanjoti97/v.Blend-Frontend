import React from "react";
import "../../Assets/Styles/NavbarLayout.css";
import logo from "../../assets/Images/logoV.png";

const NavbarLayout = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" className="navBrand" />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flexNav">
              <li className="nav-item">
                <a
                  className="nav-link active mt-1 fw-bold"
                  aria-current="page"
                  href="#"
                >
                  v.Blend
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link borderNav fw-bold" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link borderNav fw-bold" aria-disabled="true">
                  Send e-gift
                </a>
              </li>
            </ul>

            <ul className="navbar-nav me-auto takeQuiz flexNav">
              <li className="nav-item borderNav fw-bold">
                Take The Quiz <i className="fa-solid fa-link"></i>
              </li>
            </ul>

            <ul className="navbar-nav me-auto flexNav rightNav">
              <li className="nav-item borderNav">
                <i className="fa-solid fa-share-nodes"></i>
              </li>
              <div className="borderNav d-flex">
                <li className="nav-item borderNav">
                  <i className="fa-brands fa-square-instagram"></i>
                </li>
                <li className="nav-item borderNav">
                  <i className="fa-brands fa-square-x-twitter"></i>
                </li>
                <li className="nav-item borderNav">
                  <i className="fa-brands fa-facebook"></i>
                </li>
              </div>
              <div className="d-flex">
                <img
                  src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                  className="avatarImg"
                  alt=""
                />{" "}
                <i className="fa-solid fa-circle-plus"></i>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="navbar-nav me-auto takeQuizMobile">
        <li className="nav-item borderNav fw-bold">
          Take The Quiz <i className="fa-solid fa-link"></i>
        </li>
      </ul>

      <div className="d-flex responsiveAvatar">
        <img
          src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
          className="avatarImg"
          alt=""
        />{" "}
        <i className="fa-solid fa-circle-plus"></i>
      </div>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand>
          <img src={logo} alt="" className="navBrand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto flexNav">
            <Nav.Link href="#" className="mt-1 fw-bold">
              v.Blend
            </Nav.Link>
            <Nav.Link href="#" className="borderNav fw-bold">
              About
            </Nav.Link>
            <Nav.Link href="#" className="borderNav fw-bold">
              Send e-gift
            </Nav.Link>
          </Nav>

          <Nav className="me-auto takeQuiz flexNav">
            <Nav.Link href="#" className="borderNav fw-bold">
              Take The Quiz <i className="fa-solid fa-link"></i>
            </Nav.Link>
          </Nav>

          <Nav className="me-auto flexNav rightNav">
            <Nav.Link href="#" className="borderNav">
              <i className="fa-solid fa-share-nodes"></i>
            </Nav.Link>
            <div className="borderNav d-flex">
              <Nav.Link href="#">
                <i className="fa-brands fa-square-instagram"></i>
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fa-brands fa-square-x-twitter"></i>
              </Nav.Link>
              <Nav.Link href="#link">
                <i className="fa-brands fa-facebook"></i>
              </Nav.Link>
            </div>
            <div className="d-flex">
              <img
                src="https://www.befunky.com/images/prismic/82e0e255-17f9-41e0-85f1-210163b0ea34_hero-blur-image-3.jpg?auto=avif,webp&format=jpg&width=896"
                className="avatarImg"
                alt=""
              />{" "}
              <i className="fa-solid fa-circle-plus"></i>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Nav className="me-auto takeQuizMobile flexNav">
        <Nav.Link href="#" className="borderNav fw-bold">
          Take The Quiz <i className="fa-solid fa-link"></i>
        </Nav.Link>
      </Nav> */}
    </div>
  );
};

export default NavbarLayout;
