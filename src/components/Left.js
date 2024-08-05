import PropTypes from "prop-types";
import "./Left.css";

const Left = ({ className = "" }) => {
  return (
    <div className={`left ${className}`}>
      <div className="introduction">
        <div className="logo1">
          <img className="logo-icon1" alt="" src="/logo.svg" />
          <h3 className="zenden1">ZENDEN</h3>
        </div>
        <div className="we-ara-a-container">
          <span>{`We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... `}</span>
          <span className="read-more">Read More</span>
        </div>
      </div>
      <div className="contact">
        <div className="lighttel">
          <img className="icons" loading="lazy" alt="" src="/icons.svg" />
          <div className="text">
            <div className="tel">Tel</div>
            <div className="contact-values">310-437-2766</div>
          </div>
        </div>
        <div className="lighttel">
          <img className="icons" alt="" src="/icons1.svg" />
          <div className="text">
            <div className="tel">Mail</div>
            <div className="contact-values">unreal@outlook.com</div>
          </div>
        </div>
        <div className="lightaddress">
          <img className="icons" alt="" src="/icons2.svg" />
          <div className="text2">
            <div className="tel">Address</div>
            <div className="campfire-ave-meriden">
              706 Campfire Ave. Meriden, CT 06450
            </div>
          </div>
        </div>
        <div className="lightfax">
          <img
            className="lighticon"
            loading="lazy"
            alt=""
            src="/lighticon.svg"
          />
          <div className="text">
            <div className="tel">Fax</div>
            <div className="contact-values">+1-000-0000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Left.propTypes = {
  className: PropTypes.string,
};

export default Left;
