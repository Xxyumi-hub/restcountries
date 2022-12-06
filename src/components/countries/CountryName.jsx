const CountryName = ({ filteredCountry, setfilteredCountries }) => {
  const displaySingleCountry = () => {
    setfilteredCountries([filteredCountry]);
  };

  return (
    <li>
      {filteredCountry.name.common}{' '}
      <button onClick={displaySingleCountry}>Click Me</button>
    </li>
  );
};

export default CountryName;
