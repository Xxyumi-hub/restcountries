import { useState, useEffect } from 'react';
import Country from './components/countries/Country';
import CountryNameList from './components/countries/CountryNameList';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setfilteredCountries] = useState([]);

  useEffect(() => {
    if (countries.length === 0) {
      fetch('https://restcountries.com/v3/all') // fetching data from api
        .then(
          (response) => response.json() // Return data converted to JSON
        )
        .then((data) => {
          setCountries(data);
        });
    }
  }, [countries]);

  // reset filteredCountries when searchTerm changes
  useEffect(() => {
    setfilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [countries, searchTerm]);

  const dataToDisplay = !searchTerm ? null : filteredCountries.length > 10 ? (
    'Too many results'
  ) : filteredCountries.length > 1 ? (
    <CountryNameList
      filteredCountries={filteredCountries}
      setfilteredCountries={setfilteredCountries}
    />
  ) : filteredCountries.length === 1 ? (
    // Narrowed down to a single country
    <Country singleCountry={filteredCountries[0]} />
  ) : (
    'No results'
  );

  console.log({ filteredCountries });

  return (
    <div>
      <label>find countries</label>
      <input onChange={(e) => setSearchTerm(e.target.value)}></input>
      <div>{dataToDisplay}</div>
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
