/* eslint-disable jsx-quotes */
import React from 'react';

const SectionFishes = ({ children }) => {
  return (
    <section
      id="fish"
      className="fishSection container w-full mx-auto py-2 pb-16 px-2  flex flex-row flex-wrap justify-center sm:justify-start content-center"
    >
      {children}
      <style jsx>
        {`
          .fishSection {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          }
        `}
      </style>
    </section>
  );
};
//container w-full mx-auto py-2 pb-16 px-2  flex flex-row flex-wrap justify-center sm:justify-start content-center

export default SectionFishes;
