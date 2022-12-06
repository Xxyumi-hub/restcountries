import CountryName from './CountryName';

const CountryNameList = ({ filteredCountries, setSingleCountry }) => {
  return (
    <ul>
      {filteredCountries.map((filteredCountry, i) => (
        <CountryName
          key={i}
          filteredCountry={filteredCountry}
          setSingleCountry={setSingleCountry}
        />
      ))}
    </ul>
  );
};

export default CountryNameList;
