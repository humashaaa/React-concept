import { useEffect } from "react";
import { useState } from "react";
import Country from "./Component/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  console.log(countries);

  const handleVisit = (country) => {
    // jehetu setVisitedCoutry ekta function ar useState e empty array tai ei country obj function e pathaite hole normally pathaile hobe na push, pop korleo hobe na react er bhelkibaji tai notun variable e rekhe spread oparator use korte hobe
    // setVisitedCountries(country)
    // setVisitedCountries.push(country)
    const newCountry = [...visitedCountries, country]
    setVisitedCountries(newCountry)

    console.log(country);
  };

  return (
    <>
      <h1 className="mb-5">Counties : {countries.length} </h1>
      <div className="mb-10">
        <h1>Visited Country : {visitedCountries.map(country=> <li>{country.name.common}</li>)} </h1>
        <ul></ul>
      </div>
      <div className="grid grid-cols-3 ">
        {countries.map((country) => (
          <Country
            key={country.id}
            handleVisit={handleVisit}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
}

export default App;
