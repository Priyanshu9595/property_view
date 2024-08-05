import ColorNewsletter from "./ColorNewsletter";
import PropTypes from "prop-types";
import "./Newsletter.css";

const Newsletter = ({ className = "" }) => {
  return (
    <div className={`newsletter ${className}`}>
      <div className="menu6">
        <div className="newsletter1">Newsletter</div>
        <div className="be-the-first">
          Be the first one to know about discounts, offers and events
        </div>
      </div>
      <ColorNewsletter
        colorNewsletterPosition="unset"
        colorNewsletterBorderRadius="12px"
        colorNewsletterBackgroundColor="#4a61b5"
        enterYourEmailFontSize="16px"
        enterYourEmailFontFamily="'DM Sans'"
        enterYourEmailColor="#fff"
        registerLogin="Submit"
      />
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
