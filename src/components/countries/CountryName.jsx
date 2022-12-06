const CountryName = ({ filteredCountry, setSingleCountry }) => {
  const displaySingleCountry = () => {
    setSingleCountry((prevState) => [...prevState, filteredCountry]);
  };

  return (
    <li>
      {filteredCountry.name.common}{' '}
      <button onClick={displaySingleCountry}>Click Me</button>
    </li>
  );
};

export default CountryName;
