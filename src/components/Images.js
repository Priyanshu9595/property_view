import Info from "./Info";
import PropTypes from "prop-types";
import "./Images.css";

const Images = ({ className = "" }) => {
  return (
    <div className={`images ${className}`}>
      <div className="image-placeholder" />
      <div className="image-slider">
        <div className="image-navigation">
          <img
            className="image-selector-icon"
            loading="lazy"
            alt=""
            src="/rectangle-34@2x.png"
          />
          <img
            className="image-selector-icon"
            loading="lazy"
            alt=""
            src="/rectangle-35@2x.png"
          />
          <img
            className="image-selector-icon"
            loading="lazy"
            alt=""
            src="/rectangle-36@2x.png"
          />
        </div>
        <img
          className="active-image-icon"
          loading="lazy"
          alt=""
          src="/rectangle-31@2x.png"
        />
      </div>
      <div className="property-details">
        <div className="property-details-child" />
        <div className="deatils">
          <Info />
          <div className="area">
            <img
              className="mdiheart-icon"
              loading="lazy"
              alt=""
              src="/mdiheart.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Images.propTypes = {
  className: PropTypes.string,
};

export default Images;
