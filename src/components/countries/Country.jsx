const Country = ({ singleCountry }) => {
  return (
    <div>
      <h1>{singleCountry.name.common}</h1>
      <p>capital {singleCountry.capital[0]}</p>
      <p>area {singleCountry.area}</p>
      <h2>languages:</h2>
      {Object.values(singleCountry.languages).map((language, index) => {
        return <li key={index}>{language}</li>;
      })}
      <img src={singleCountry.flags[0]} alt='' />
    </div>
  );
};

export default Country;
