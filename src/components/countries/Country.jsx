import React from 'react';

const Country = ({ filteredCountry, i }) => {
  return (
    <div key={i}>
      <h1>{filteredCountry.name.common}</h1>
      <p>capital {filteredCountry.capital[0]}</p>
      <p>area {filteredCountry.area}</p>
      <h2>languages:</h2>
      {Object.values(filteredCountry.languages).map((language, index) => {
        return <li key={index}>{language}</li>;
      })}
      <img src={filteredCountry.flags[0]} alt='' />
    </div>
  );
};

export default Country;
