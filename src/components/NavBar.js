import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import logo from "../asists/img project/لوجو المستخدم.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header>
      <div className="d-flex justify-content-between container-fluid">
        <div className="logo__container ">
          <Link to="/" className="d-flex">
            {" "}
            <h1 className="">تنمية القري المصريه</h1>
            <img src={logo} className="img-fluid" alt="" />
          </Link>
        </div>

        <Navbar bg="" expand="lg" className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav__container">
              <Nav.Link className="nav__link">
                <Link to="/">الصفحة الرئيسية</Link>
              </Nav.Link>

              <NavDropdown
                title="خدمات القري"
                id="basic-nav-dropdown"
                className="nav__link"
              >
                <NavDropdown.Item>
                  <Link to="/hospitals">المستشفيات الحكوميه</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/school">المدراس الحكوميه</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/shops">المولات والمحلات</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/industry">المصانع العامة</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/clinecs">العيادات الخصوصية</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/craft"> الصنايعية</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/elnady">النادي الرياضي</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/ambulance">الإسعاف والطوارئ</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav__link">
                <Link to="/aboutvillage">عن القري</Link>
              </Nav.Link>
              <Nav.Link className="nav__link">
                <Link to="/ratevillage"> تقييمات القري</Link>
              </Nav.Link>
              <NavDropdown
                title="القري المتواجدة "
                id="basic-nav-dropdown"
                className="nav__link"
              >
                <NavDropdown.Item href="#action/3.1">
                  رأس الخليج
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">قريه 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">قريه 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav__link"> التواصل معنا للمساعدة</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};
export default NavBar;
