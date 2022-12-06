const CountryName = ({ filteredCountry, i, setSingleCountry }) => {
  const displaySingleCountry = () => {
    setSingleCountry((prevState) => [...prevState, filteredCountry]);
  };

  console.log({ i });

  return (
    <li key={i} style={{ listStyle: 'none', marginBlock: '0.75rem' }}>
      {filteredCountry.name.common}{' '}
      <button onClick={displaySingleCountry}>Click Me</button>
    </li>
  );
};

export default CountryName;
