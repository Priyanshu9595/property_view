import OPtions from "./OPtions";
import PropTypes from "prop-types";
import "./Options1.css";

const Options1 = ({ className = "" }) => {
  return (
    <div className={`options1 ${className}`}>
      <div className="option-box">
        <div className="option-box-child" />
        <div className="calendar-parent">
          <div className="calendar">
            <div className="calender">
              <img
                className="uiscalender-icon"
                loading="lazy"
                alt=""
                src="/uiscalender.svg"
              />
              <div className="calendar-label-container">
                <div className="choose-a-date">Choose a date and time</div>
              </div>
            </div>
          </div>
          <div className="first-separator" />
          <div className="booking-options">
            <div className="time-options">
              <div className="time-option-labels">
                <div className="hourly">Hourly</div>
                <div className="rs100hr">Rs100/hr</div>
              </div>
              <div className="time-option-labels">
                <div className="daily">Daily</div>
                <div className="rs1000day">Rs1000/day</div>
              </div>
            </div>
          </div>
        </div>
        <div className="reservation">
          <div className="reservation-actions">
            <div className="first-separator" />
            <button className="reserve-button-container">
              <button className="button2">
                <div className="button-item" />
                <div className="reserve-now">Reserve now</div>
              </button>
            </button>
          </div>
          <div className="reservation-details">
            <div className="details">
              <div className="confirmation-icons">
                <img className="mditick-icon" alt="" src="/mditick.svg" />
                <img className="mditick-icon1" alt="" src="/mditick.svg" />
              </div>
              <div className="cancellation-policy">
                <div className="no-charges-until">
                  No charges until your reservation begins
                </div>
                <div className="cancel-for-free">
                  Cancel for free upto 2 hours before
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <button className="button3">
            <div className="button-inner" />
            <div className="request-free-tour">Request free tour</div>
          </button>
        </div>
      </div>
      <OPtions rectangle41="/rectangle-41@2x.png" />
      <OPtions
        rectangle41="/rectangle-411@2x.png"
        ratingStarsHeight="21px"
        emptyStarsHeight="20px"
        bookingWidth="unset"
        priceAlignSelf="unset"
      />
      <OPtions
        rectangle41="/rectangle-412@2x.png"
        ratingStarsHeight="21px"
        emptyStarsHeight="20px"
        bookingWidth="unset"
        priceAlignSelf="unset"
      />
    </div>
  );
};

Options1.propTypes = {
  className: PropTypes.string,
};

export default Options1;
