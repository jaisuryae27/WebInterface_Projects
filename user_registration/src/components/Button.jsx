import React from 'react';
import './Button.css';

/**
 * Task 5: Reusable Button Component
 * Accepts label and color as props.
 */
const Button = ({
  label,
  color = 'primary',
  type = 'button',
  onClick,
  disabled = false
}) => {
  const isPresetColor = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info'
  ].includes(color);

  const buttonStyle =
    !isPresetColor && color
      ? {
          backgroundColor: color,
          color: '#ffffff'
        }
      : {};

  const colorClass = isPresetColor ? `btn-${color}` : '';

  return (
    <button
      type={type}
      className={`reusable-btn ${colorClass}`}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
