import React from 'react';
import '../tailwind.css';
const Button = ({ text, style }) => {
  const buttonClasses = `button ${style}`;

  return (
    <button className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;