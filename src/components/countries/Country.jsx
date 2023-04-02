import Weather from '../weather/Weather';

const Country = ({ filteredCountry }) => {
  return (
    <div>
      <h1>{filteredCountry.name.common}</h1>
      <p>capital {filteredCountry.capital[0]}</p>
      <p>area {filteredCountry.area}</p>
      <h2>languages:</h2>
      {Object.values(filteredCountry.languages).map((language, index) => {
        return <li key={index}>{language}</li>;
      })}
      <img src={filteredCountry.flags[0]} alt='' />
      <Weather lat={filteredCountry.latlng[0]} long={filteredCountry.latlng[1]} capital={filteredCountry.capital[0]}/>
    </div>
  );
};

export default Country;
