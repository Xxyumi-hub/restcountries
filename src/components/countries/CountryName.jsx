const CountryName = ({filteredCountry, i, setSingleCountry}) => {

  const displaySingleCountry = () => {
    console.log(filteredCountry)
    setSingleCountry(filteredCountry)
    console.log('UPDATED')
  }

  return (
    <div>
      <p key={i}>
        {filteredCountry.name.common}
        {' '}
        {/* <button onClick={displayCountry(i, filteredCountry)}>show</button> */}
        {/* <button onClick={testButton}>test</button>
        <button onClick={() => setShowCountryDetails(true)}>Try</button>
        {showCountryDetails ? <Country i={i} filteredCountry={filteredCountry}/> : ''} */}
        <button onClick={displaySingleCountry}>Click Me</button>
      </p>
  </div>
  )
}

export default CountryName