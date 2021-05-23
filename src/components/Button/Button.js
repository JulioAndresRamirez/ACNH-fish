import React from 'react';

const Button = ({ label, selected, handleState }) => {
  return (
    <button
      className={`text-sm py-1 px-2 rounded-lg font-bold mr-2 focus:outline-none 
      ${
        selected
          ? 'bg-fish-accent-cian cursor-default'
          : 'bg-gray-200 hover:bg-gray-300'
      }`}
      type="button"
      disabled={selected}
      onClick={() => handleState()}
    >
      {label}
    </button>
  );
};

export default Button;
