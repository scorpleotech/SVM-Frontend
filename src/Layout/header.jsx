import React, { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import classes from "./layout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Drawer } from "@mui/material";
import { CloseIcon } from "../Assets/Icons/icons";
import { BsPerson } from "react-icons/bs";
import logo from "../Assets/Images/SRIVARUMotorsnew.svg";
import { Nav, Navbar } from "react-bootstrap";
import EnquiryForm from "../Pages/Others/enquiryForm";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [modelToggle, setModelToggle] = useState(false);

  const handleNavigate = (name, route) => {
    setCurrentRoute(route);
    if (window.innerWidth < 850) {
      setOpen(false);
    }
  };

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      setLoginStatus(false);
    } else {
      setLoginStatus(true);
    }
  }, [window.location.pathname]);

  const modalClose = () => {
    setModelToggle(false);
  };

  const handleLoginstatus = () => {
    if (loginStatus) {
      setLoginStatus(false);
      localStorage.removeItem("userData");
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div>
      <div className={classes.headerMainDiv}>
        {/* Logo */}
        <div>
          <Link to="/" onClick={() => handleNavigate("home", "/")}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className={classes.desktopNavbar}>
          <ul className={classes.navbar}>
            <Link
              to="/"
              onClick={() => handleNavigate("home", "/")}
              className={currentRoute === "/" ? `${classes.activebtn}` : null}
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  Home
                </Button>
              </li>
            </Link>

            <Link
              to="/about-us"
              onClick={() => handleNavigate("about-us", "/about-us")}
              className={
                currentRoute?.includes("about-us") ? `${classes.activebtn}` : null
              }
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  About Us
                </Button>
              </li>
            </Link>

            {/* ✅ Prana First */}
            <Link
              to="/prana"
              onClick={() =>
                handleNavigate("prana-electric-bike", "/prana")
              }
              className={
                currentRoute?.includes("prana-electric-bike")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  Prana
                </Button>
              </li>
            </Link>

            {/* ✅ Prana Class Second */}
            <Link
              to="/class"
              onClick={() =>
                handleNavigate("prana-plus-electric-bike", "/class")
              }
              className={
                currentRoute?.includes("prana-plus-electric-bike")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  Prana Class
                </Button>
              </li>
            </Link>

            {/* ✅ Alive Third */}
            <Link
              to="/alive"
              onClick={() =>
                handleNavigate("alive-electric-bike", "/alive")
              }
              className={
                currentRoute?.includes("alive-electric-bike")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  Alive
                </Button>
              </li>
            </Link>

            <Link
              to="/showrooms"
              onClick={() => handleNavigate("showrooms", "/showrooms")}
              className={
                currentRoute?.includes("showrooms") ? `${classes.activebtn}` : null
              }
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  Experience Center
                </Button>
              </li>
            </Link>

            <Link
              to="/book-a-test-drive"
              onClick={() =>
                handleNavigate("book-a-test-drive", "/book-a-test-drive")
              }
              className={
                currentRoute?.includes("book-a-test-drive")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  Demo Ride
                </Button>
              </li>
            </Link>

            <Link
              to="/contact-us"
              onClick={() => handleNavigate("contact-us", "/contact-us")}
              className={
                currentRoute?.includes("contact-us") ? `${classes.activebtn}` : null
              }
            >
              <li>
                <Button variant="text" className={classes.linkburron}>
                  Contact Us
                </Button>
              </li>
            </Link>
          </ul>
        </div>

        {/* Header Buttons */}
        <div className={classes.headerButtonDiv}>
          <Button
            variant="contained"
            className={`${classes.loginButton} ${classes.desktopOnly}`}
            onClick={() => setModelToggle(true)}
          >
            <span>Enquiry</span>
            <BiMessageDetail />
          </Button>

          <Link
            onClick={() => handleLoginstatus()}
            className={
              currentRoute?.includes("login") ? `${classes.activebtn}` : null
            }
          >
            <Button variant="contained" className={`${classes.loginButton} ${classes.desktopOnly}`}>
              <BsPerson />
              <span>{loginStatus ? "Logout" : "Login"}</span>
            </Button>
          </Link>

          {/* Hamburger Menu Button - Always visible on mobile */}
          <Button
            variant="contained"
            className={classes.hamburgerMenuButton}
            onClick={() => handleOpenDrawer()}
          >
            <GiHamburgerMenu />
          </Button>
        </div>

        {/* Drawer Nav */}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <div className={classes.DrawerContainer}>
            <Button onClick={toggleDrawer(false)} className={classes.DrwercloseBtn}>
              <CloseIcon />
            </Button>

            {/* Mobile Enquiry and Login buttons inside drawer */}
            <div className={classes.mobileDrawerButtons}>
              <Button
                variant="contained"
                className={classes.loginButton}
                onClick={() => {
                  setModelToggle(true);
                  setOpen(false);
                }}
              >
                <span>Enquiry</span>
                <BiMessageDetail />
              </Button>

              <Button
                variant="contained"
                className={classes.loginButton}
                onClick={() => {
                  handleLoginstatus();
                  setOpen(false);
                }}
              >
                <BsPerson />
                <span>{loginStatus ? "Logout" : "Login"}</span>
              </Button>
            </div>

            {/* ✅ Prana */}
            <Link
              to="/prana"
              onClick={() =>
                handleNavigate("prana-electric-bike", "/prana")
              }
              className={
                currentRoute?.includes("prana-electric-bike")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Prana</span>
              </Button>
            </Link>

            {/* ✅ Prana Class */}
            <Link
              to="/class"
              onClick={() =>
                handleNavigate("prana-plus-electric-bike", "/class")
              }
              className={
                currentRoute?.includes("prana-plus-electric-bike")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Prana Class</span>
              </Button>
            </Link>

            {/* ✅ Alive */}
            <Link
              to="/alive"
              onClick={() =>
                handleNavigate("alive-electric-bike", "/alive")
              }
              className={
                currentRoute?.includes("alive-electric-bike")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Alive</span>
              </Button>
            </Link>

            {/* other drawer links remain same... */}
            <Link
              to="https://svmh.ai/"
              target="_blank"
              onClick={() => {
                handleNavigate("investor", "https://svmh.ai/");
              }}
              className={
                currentRoute?.includes("investor") ? `${classes.activebtn}` : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Investor Relations</span>
              </Button>
            </Link>

            <Link
              to="/news"
              className={
                currentRoute?.includes("events") ? `${classes.activebtn}` : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>News & Events</span>
              </Button>
            </Link>

            <Link
              to="/blogs"
              className={
                currentRoute?.includes("blogs") ? `${classes.activebtn}` : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Blogs</span>
              </Button>
            </Link>

            <Link
              to="/careers"
              className={
                currentRoute?.includes("careers") ? `${classes.activebtn}` : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Careers</span>
              </Button>
            </Link>

            <Link
              to="/become-dealer"
              className={
                currentRoute?.includes("/become-dealer")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Become a Dealer</span>
              </Button>
            </Link>

            <Link
              to="/gallery"
              className={
                currentRoute?.includes("/gallery") ? `${classes.activebtn}` : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>Gallery</span>
              </Button>
            </Link>

            <Link
              to="/faq"
              className={
                currentRoute?.includes("faq") ? `${classes.activebtn}` : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>FAQ</span>
              </Button>
            </Link>

            <Link
              to="/total-cost-of-ownership"
              className={
                currentRoute?.includes("total-cost-of-ownership")
                  ? `${classes.activebtn}`
                  : null
              }
            >
              <Button
                onClick={toggleDrawer(false)}
                variant="text"
                className={`${classes.linkburron} ${classes.drawerLinks}`}
              >
                <span>TCO</span>
              </Button>
            </Link>

            {userData && (
              <Link
                to="/myorders"
                className={
                  currentRoute?.includes("myorders") ? `${classes.activebtn}` : null
                }
              >
                <Button
                  onClick={toggleDrawer(false)}
                  variant="text"
                  className={`${classes.linkburron} ${classes.drawerLinks}`}
                >
                  <span>My Orders</span>
                </Button>
              </Link>
            )}
          </div>
        </Drawer>
      </div>

      {/* Mobile Navbar */}
      <div className={classes.smallNavBarCotainer}>
        <Navbar collapseOnSelect expand="lg" className={classes.navbarMainDiv}>
          <Navbar.Brand href="home">
            <img src={logo} alt="logo" className={classes.logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={classes.MenuIcon}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`mr-auto ${classes.navbarContainer}`}>
              {/* Home */}
              <Nav.Link
                href="/"
                onClick={() => handleNavigate("home", "/")}
                className={currentRoute === "/" ? `${classes.activebtn}` : null}
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    Home
                  </Button>
                </li>
              </Nav.Link>

              {/* About Us */}
              <Nav.Link
                href="/about-us"
                onClick={() => handleNavigate("about-us", "/about-us")}
                className={
                  currentRoute?.includes("about-us") ? `${classes.activebtn}` : null
                }
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    About Us
                  </Button>
                </li>
              </Nav.Link>

              {/* ✅ Prana */}
              <Nav.Link
                href="/prana"
                onClick={() =>
                  handleNavigate("prana-electric-bike", "/prana")
                }
                className={
                  currentRoute?.includes("prana-electric-bike")
                    ? `${classes.activebtn}`
                    : null
                }
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    Prana
                  </Button>
                </li>
              </Nav.Link>

              {/* ✅ Prana Class */}
              <Nav.Link
                href="/class"
                onClick={() =>
                  handleNavigate("prana-plus-electric-bike", "/class")
                }
                className={
                  currentRoute?.includes("prana-plus-electric-bike")
                    ? `${classes.activebtn}`
                    : null
                }
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    Prana Class
                  </Button>
                </li>
              </Nav.Link>

              {/* ✅ Alive */}
              <Nav.Link
                href="/alive"
                onClick={() =>
                  handleNavigate("alive-electric-bike", "/alive")
                }
                className={
                  currentRoute?.includes("alive-electric-bike")
                    ? `${classes.activebtn}`
                    : null
                }
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    Alive
                  </Button>
                </li>
              </Nav.Link>

              {/* Rest same... */}
              <Nav.Link
                href="/showrooms"
                onClick={() => handleNavigate("showrooms", "/showrooms")}
                className={
                  currentRoute?.includes("showrooms") ? `${classes.activebtn}` : null
                }
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    Experience Center
                  </Button>
                </li>
              </Nav.Link>

              <Nav.Link
                href="/book-a-test-drive"
                onClick={() =>
                  handleNavigate("book-a-test-drive", "/book-a-test-drive")
                }
                className={
                  currentRoute?.includes("book-a-test-drive")
                    ? `${classes.activebtn}`
                    : null
                }
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    Demo Ride
                  </Button>
                </li>
              </Nav.Link>

              <Nav.Link
                href="/contact-us"
                onClick={() => handleNavigate("contact-us", "/contact-us")}
                className={
                  currentRoute?.includes("contact-us") ? `${classes.activebtn}` : null
                }
              >
                <li>
                  <Button variant="text" className={classes.linkburron}>
                    Contact Us
                  </Button>
                </li>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {modelToggle && <EnquiryForm modalClose={modalClose} />}
    </div>
  );
};

export default Header;