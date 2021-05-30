/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];

export const Button = ({
  children, type, onClick, buttonStyle, buttonSize, buttonColor,
}) => {
  // const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];
  // const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button type={type} onClick={onClick} className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}>{children}</button>
  );
};
