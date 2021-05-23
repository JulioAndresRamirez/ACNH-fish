import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="block bg-red-400 p-2 rounded-lg overflow-hidden "
      >
        Language
      </button>
      <div
        className={`absolute bg-white rounded-lg border border-gray-900 p-4 mt-6 shadow-xl w-48 right-0 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <a
          href="#"
          className="block px-2 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >
          English (United states)
        </a>
        <a
          href="#"
          className="block px-2 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >
          Japanese
        </a>
        <a
          href="#"
          className="block px-2 py-1 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >
          Español
        </a>
      </div>
    </div>
  );
}

export default Dropdown;
