const CountryName = ({ filteredCountry, i, setSingleCountry }) => {
  const displaySingleCountry = () => {
    setSingleCountry((prevState) => [...prevState, filteredCountry]);
  };

  return (
    <div>
      <p key={i}>
        {filteredCountry.name.common}{' '}
        <button onClick={displaySingleCountry}>Click Me</button>
      </p>
    </div>
  );
};

export default CountryName;
