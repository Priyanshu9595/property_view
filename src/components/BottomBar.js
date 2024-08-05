import PropTypes from "prop-types";
import "./BottomBar.css";

const BottomBar = ({ className = "" }) => {
  return (
    <div className={`bottombar ${className}`}>
      <div className="items6">
        <div className="about-us3">About us</div>
        <div className="contact1">Contact</div>
        <div className="privacy-policy">Privacy policy</div>
        <div className="sitemap">Sitemap</div>
        <div className="terms-of-use">Terms of Use</div>
      </div>
      <div className="all-rights-reserved">
        © 2000-2021, All Rights Reserved
      </div>
    </div>
  );
};

BottomBar.propTypes = {
  className: PropTypes.string,
};

export default BottomBar;
