import { useMemo } from "react";
import ColorButton from "./ColorButton";
import PropTypes from "prop-types";
import "./ColorNewsletter.css";

const ColorNewsletter = ({
  className = "",
  colorNewsletterPosition,
  colorNewsletterBorderRadius,
  colorNewsletterBackgroundColor,
  enterYourEmailFontSize,
  enterYourEmailFontFamily,
  enterYourEmailColor,
  registerLogin,
}) => {
  const colorNewsletterStyle = useMemo(() => {
    return {
      position: colorNewsletterPosition,
      borderRadius: colorNewsletterBorderRadius,
      backgroundColor: colorNewsletterBackgroundColor,
    };
  }, [
    colorNewsletterPosition,
    colorNewsletterBorderRadius,
    colorNewsletterBackgroundColor,
  ]);

  const enterYourEmailStyle = useMemo(() => {
    return {
      fontSize: enterYourEmailFontSize,
      fontFamily: enterYourEmailFontFamily,
      color: enterYourEmailColor,
    };
  }, [enterYourEmailFontSize, enterYourEmailFontFamily, enterYourEmailColor]);

  return (
    <div
      className={`sizemedium-styledefault ${className}`}
      style={colorNewsletterStyle}
    >
      <img className="coloricon" alt="" src="/coloricon.svg" />
      <div className="enter-your-email" style={enterYourEmailStyle}>
        Enter your email
      </div>
      <div className="right">
        <ColorButton
          colorButtonPosition="unset"
          colorButtonHeight="36px"
          colorButtonWidth="94px"
          colorButtonBorderRadius="30px"
          registerLogin={registerLogin}
          registerLoginFontSize="10px"
          registerLoginFontFamily="'Plus Jakarta Display'"
          registerLoginColor="#4475f2"
          registerLoginFontWeight="unset"
          colorButtonPadding="0px 38px"
          colorButtonBorder="unset"
          registerLoginAlignSelf="unset"
          registerLoginDisplay="unset"
          registerLoginMinWidth="unset"
        />
      </div>
    </div>
  );
};

ColorNewsletter.propTypes = {
  className: PropTypes.string,
  registerLogin: PropTypes.string,

  /** Style props */
  colorNewsletterPosition: PropTypes.any,
  colorNewsletterBorderRadius: PropTypes.any,
  colorNewsletterBackgroundColor: PropTypes.any,
  enterYourEmailFontSize: PropTypes.any,
  enterYourEmailFontFamily: PropTypes.any,
  enterYourEmailColor: PropTypes.any,
};

export default ColorNewsletter;
