import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ColorButton.css";

const ColorButton = ({
  className = "",
  colorButtonPosition,
  colorButtonHeight,
  colorButtonWidth,
  colorButtonBorderRadius,
  registerLogin,
  registerLoginFontSize,
  registerLoginFontFamily,
  registerLoginColor,
  registerLoginFontWeight,
  colorButtonPadding,
  colorButtonBorder,
  registerLoginAlignSelf,
  registerLoginDisplay,
  registerLoginMinWidth,
}) => {
  const colorButtonStyle = useMemo(() => {
    return {
      position: colorButtonPosition,
      height: colorButtonHeight,
      width: colorButtonWidth,
      borderRadius: colorButtonBorderRadius,
      padding: colorButtonPadding,
      border: colorButtonBorder,
    };
  }, [
    colorButtonPosition,
    colorButtonHeight,
    colorButtonWidth,
    colorButtonBorderRadius,
    colorButtonPadding,
    colorButtonBorder,
  ]);

  const registerLoginStyle = useMemo(() => {
    return {
      fontSize: registerLoginFontSize,
      fontFamily: registerLoginFontFamily,
      color: registerLoginColor,
      fontWeight: registerLoginFontWeight,
      alignSelf: registerLoginAlignSelf,
      display: registerLoginDisplay,
      minWidth: registerLoginMinWidth,
    };
  }, [
    registerLoginFontSize,
    registerLoginFontFamily,
    registerLoginColor,
    registerLoginFontWeight,
    registerLoginAlignSelf,
    registerLoginDisplay,
    registerLoginMinWidth,
  ]);

  return (
    <div
      className={`modetext-styledefault ${className}`}
      style={colorButtonStyle}
    >
      <b className="register-login" style={registerLoginStyle}>
        {registerLogin}
      </b>
    </div>
  );
};

ColorButton.propTypes = {
  className: PropTypes.string,
  registerLogin: PropTypes.string,

  /** Style props */
  colorButtonPosition: PropTypes.any,
  colorButtonHeight: PropTypes.any,
  colorButtonWidth: PropTypes.any,
  colorButtonBorderRadius: PropTypes.any,
  registerLoginFontSize: PropTypes.any,
  registerLoginFontFamily: PropTypes.any,
  registerLoginColor: PropTypes.any,
  registerLoginFontWeight: PropTypes.any,
  colorButtonPadding: PropTypes.any,
  colorButtonBorder: PropTypes.any,
  registerLoginAlignSelf: PropTypes.any,
  registerLoginDisplay: PropTypes.any,
  registerLoginMinWidth: PropTypes.any,
};

export default ColorButton;
