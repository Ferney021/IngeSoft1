import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

const Header = () => {
  return (
    <React.Fragment>
      <header className="p-3 border-bottom bg-light">
        <div className="container-fluid">
          <div className="row g-3">
            <div className="col-md-3 text-center">
              <Link to="/">
                <img
                  alt="logo"
                  src="../../images/logo.jpg"
                  width={100}
                />
              </Link>
            </div>
            <div className="col-md-5">
              <Search />
            </div>
            <div className="col-md-4">
              <div className="position-relative d-inline mr-3">
                <Link to="/cart" className="btn btn-primary">
                  <IconCart3 className="i-va" />
                  <div className="position-absolute top-0 left-100 translate-middle badge bg-danger rounded-circle">
                    2
                  </div>
                </Link>
              </div>
              \\
              <div className="btn-group">
                <Link to="/support">
                  <button type="button" className="btn btn-primary ml-1">Estadisticas</button>
                </Link>
              </div>
              {/* <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-secondary rounded-circle border mr-3 dropdown-toggle1"
                  data-toggle="dropdown"
                  aria-expanded="false"
                  aria-label="Profile"
                >
                  <FontAwesomeIcon icon={faUser} className="text-light" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/account/profile">
                      <IconPersonBadgeFill /> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/star/zone">
                      <IconStarFill className="text-warning" /> Star Zone
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/orders">
                      <IconListCheck className="text-primary" /> Orders
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/wishlist">
                      <IconHeartFill className="text-danger" /> Wishlist
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/account/notification">
                      <IconBellFill className="text-primary" /> Notification
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/support">
                      <IconInfoCircleFill className="text-success" /> Support
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <IconDoorClosedFill className="text-danger" /> Logout
                    </Link>
                  </li>
                </ul>
              </div> */}
              <Link to="/account/signin">Sign In</Link> |{" "}
              <Link to="/account/signup"> Sign Up</Link>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
