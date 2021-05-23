import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <section className="container px-6 pt-4  flex flex-col sm:flex-row flex-no-wrap justify-start items-start sm:items-center">
      { children }
    </section>
  );
};

export default SectionTitle;
