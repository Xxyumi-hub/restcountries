const CountryName = ({ filteredCountry, setSingleCountry }) => {
  const displaySingleCountry = () => {
    setSingleCountry((prevState) => [...prevState, filteredCountry]);
  };

  return (
    <li style={{ listStyle: 'none', marginBlock: '0.75rem' }}>
      {filteredCountry.name.common}{' '}
      <button onClick={displaySingleCountry}>Click Me</button>
    </li>
  );
};

export default CountryName;
