import { useState, useEffect } from 'react';
import './App.css';
import Country from './components/countries/Country';
import CountryName from './components/countries/CountryName';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCountryDetails, setShowCountryDetails] = useState(false);
  const [singleCountry, setSingleCountry] = useState([]);

  useEffect(() => {
    if (countries.length === 0) {
      fetch('https://restcountries.com/v3/all') // fetching data from api
        .then(
          (response) => response.json() // Return data converted to JSON
        )
        .then((data) => {
          // console.log("Data", data);
          setCountries(data);
        });
    }
  }, [countries, singleCountry]);

  // Filter on countries
  const filteredCountries = !singleCountry.length
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : singleCountry;

  // console.log('filteredCountries:', filteredCountries);

  const testButton = () => {
    for (let i = 0; i < filteredCountries.length - 1; i++) {
      filteredCountries.pop();
    }
  };

  const countriesToDisplay = filteredCountries.map((filteredCountry, i) => {
    if (filteredCountries.length > 1) {
      return (
        <CountryName
          i={i}
          filteredCountry={filteredCountry}
          setSingleCountry={setSingleCountry}
        />
      );
    } else {
      // Narrowed down to a single country
      return <Country i={i} filteredCountry={filteredCountry} />;
    }
  });

  console.log({ singleCountry });

  return (
    <div>
      <label>find countries</label>
      <input onChange={(e) => setSearchTerm(e.target.value)}></input>
      <ul>
        {searchTerm.length === 0
          ? null
          : filteredCountries.length > 10
          ? 'Too many results'
          : countriesToDisplay}
      </ul>
    </div>
  );
}

export default App;

/* Different types of return
  => { 
    return 
  }

  vs

  => (
  )
*/
