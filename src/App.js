import { useState, useEffect } from 'react';
import Country from './components/countries/Country';
import CountryNameList from './components/countries/CountryNameList';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [singleCountry, setSingleCountry] = useState(null);

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

  // reset singleCountry when searchTerm changes
  useEffect(() => {
    setSingleCountry(null);
  }, [searchTerm]);

  // Filter on countries
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dataToDisplay = !searchTerm ? null : filteredCountries.length > 10 ? (
    'Too many results'
  ) : singleCountry ? (
    <Country singleCountry={singleCountry} />
  ) : (
    // Narrowed down to a single country
    <CountryNameList
      filteredCountries={filteredCountries}
      setSingleCountry={setSingleCountry}
    />
  );

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
