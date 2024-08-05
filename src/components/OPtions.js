import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OPtions.css";

const OPtions = ({
  className = "",
  rectangle41,
  ratingStarsHeight,
  emptyStarsHeight,
  bookingWidth,
  priceAlignSelf,
}) => {
  const ratingStarsStyle = useMemo(() => {
    return {
      height: ratingStarsHeight,
    };
  }, [ratingStarsHeight]);

  const emptyStarsStyle = useMemo(() => {
    return {
      height: emptyStarsHeight,
    };
  }, [emptyStarsHeight]);

  const bookingStyle = useMemo(() => {
    return {
      width: bookingWidth,
    };
  }, [bookingWidth]);

  const priceStyle = useMemo(() => {
    return {
      alignSelf: priceAlignSelf,
    };
  }, [priceAlignSelf]);

  return (
    <div className={`options ${className}`}>
      <div className="options-child" />
      <img
        className="option-type-divider"
        loading="lazy"
        alt=""
        src={rectangle41}
      />
      <div className="option-containers">
        <div className="option-content">
          <div className="option-details">
            <div className="studio-options">
              <div className="studio-medium">Studio Medium</div>
            </div>
            <div className="rating-stars" style={ratingStarsStyle}>
              <div className="empty-stars" style={emptyStarsStyle}>
                <img
                  className="pepicons-pencilstar-filled"
                  alt=""
                  src="/pepiconspencilstarfilled.svg"
                />
              </div>
              <img
                className="pepicons-pencilstar-filled1"
                alt=""
                src="/pepiconspencilstarfilled.svg"
              />
              <img
                className="pepicons-pencilstar-filled1"
                alt=""
                src="/pepiconspencilstarfilled.svg"
              />
              <img
                className="pepicons-pencilstar-filled1"
                alt=""
                src="/pepiconspencilstarfilled.svg"
              />
            </div>
          </div>
          <div className="booking" style={bookingStyle}>
            <div className="price" style={priceStyle}>
              <div className="rs-100000">Rs 1000.00</div>
            </div>
            <button className="button1">
              <div className="button-child" />
              <div className="book-now">Book now</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

OPtions.propTypes = {
  className: PropTypes.string,
  rectangle41: PropTypes.string,

  /** Style props */
  ratingStarsHeight: PropTypes.any,
  emptyStarsHeight: PropTypes.any,
  bookingWidth: PropTypes.any,
  priceAlignSelf: PropTypes.any,
};

export default OPtions;
