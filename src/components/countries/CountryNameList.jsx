import CountryName from './CountryName';

const CountryNameList = ({ filteredCountries, setfilteredCountries }) => {
  return (
    <ul>
      {filteredCountries.map((filteredCountry, i) => (
        <CountryName
          key={i}
          filteredCountry={filteredCountry}
          setfilteredCountries={setfilteredCountries}
        />
      ))}
    </ul>
  );
};

export default CountryNameList;
