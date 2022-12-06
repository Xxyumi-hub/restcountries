import { useState, useEffect } from 'react';
import Country from './components/countries/Country';
import CountryName from './components/countries/CountryName';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [singleCountry, setSingleCountry] = useState([]);

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
  }, [countries, singleCountry]);

  // reset singleCountry when searchTerm changes
  useEffect(() => {
    setSingleCountry([]);
  }, [searchTerm]);

  // Filter on countries
  const filteredCountries = !singleCountry.length
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : singleCountry;

  // const countriesToDisplay = filteredCountries.map((filteredCountry, i) => {
  //   if (filteredCountries.length > 1) {
  //     return (
  //       <CountryName
  //         key={i}
  //         filteredCountry={filteredCountry}
  //         setSingleCountry={setSingleCountry}
  //       />
  //     );
  //   } else {
  //     // Narrowed down to a single country
  //     return <Country key={i} filteredCountry={filteredCountry} />;
  //   }
  // });

  const countriesToDisplay = !searchTerm
    ? null
    : filteredCountries.length > 10
    ? 'Too many results'
    : filteredCountries.length > 1
    ? filteredCountries.map((filteredCountry, i) => (
        <CountryName
          key={i}
          filteredCountry={filteredCountry}
          setSingleCountry={setSingleCountry}
        />
      ))
    : // Narrowed down to a single country
      filteredCountries.map((filteredCountry, i) => (
        <Country key={i} filteredCountry={filteredCountry} />
      ));

  return (
    <div>
      <label>find countries</label>
      <input onChange={(e) => setSearchTerm(e.target.value)}></input>
      <ul>
        {countriesToDisplay}
        {/* {searchTerm.length === 0
          ? null
          : filteredCountries.length > 10
          ? 'Too many results'
          : countriesToDisplay} */}
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
