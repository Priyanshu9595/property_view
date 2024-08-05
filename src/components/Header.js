import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`navigation ${className}`}>
      <div className="logo-wrapper">
        <div className="logo">
          <img className="logo-icon" loading="lazy" alt="" src="/logo1.svg" />
          <a className="zenden">ZENDEN</a>
        </div>
      </div>
      <nav className="navbar">
        <nav className="nav">
          <div className="item-link">
            <a className="services">Services</a>
          </div>
          <div className="item-link1">
            <a className="features">Features</a>
          </div>
          <div className="item-link">
            <a className="about-us2">About Us</a>
          </div>
        </nav>
      </nav>
      <div className="user-actions">
        <button className="buttoncontained">
          <img
            className="material-symbolslogin-icon"
            alt=""
            src="/materialsymbolslogin.svg"
          />
          <a className="button">LogIn</a>
        </button>
        <div className="buttoncontained1">
          <img
            className="mdiuser-icon"
            loading="lazy"
            alt=""
            src="/mdiuser.svg"
          />
          <div className="menu-trigger">
            <img
              className="quillhamburger-icon"
              alt=""
              src="/quillhamburger.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
