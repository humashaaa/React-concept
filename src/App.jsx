import { useEffect } from "react";
import { useState } from "react";
import Country from "./Component/Country";
import { addToLS, getStorageCart, removeFromLS } from "./Component/localstorage";

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



  // get cart from local storage
  const getCart = getStorageCart()
  console.log(getCart);

  const handleVisit = (country) => {

    // state e set korar jonno

    // jehetu setVisitedCoutry ekta function ar useState e empty array tai ei country obj function e pathaite hole normally pathaile hobe na push, pop korleo hobe na react er bhelkibaji tai notun variable e rekhe spread oparator use korte hobe
    // setVisitedCountries(country)
    // setVisitedCountries.push(country)
    const newCountry = [...visitedCountries, country]
    setVisitedCountries(newCountry)

    //  local storage e set korar jonno 
    addToLS(country.name.common)

    console.log(country);
  };



  // remove from visited country
  const handleRemove = (country)=>{


    // remove cointry from state
    // const removeVisited = visitedCountries.filter(remove=>remove.name.common !== country.name.common )
    // setVisitedCountries(removeVisited)

    // remove country from local storage
    removeFromLS(country.name.common)

  }

  return (
    <>
      <h1 className="mb-5">Counties : {countries.length} </h1>
      <div className="mb-10">
        {/* state e set kore dekhano hoyechhe */}
        <h1>Visited Country from state : {visitedCountries.map(country=> <li key={country.id}>{country.name.common}</li>)} </h1>
        {/* local storage theke ene dekhano hoyecehe */}
        <h1>Visited Country from Local Storage : {getCart.map(countryName=> <li key={countryName.id}>{countryName}</li>)} </h1>
        <ul></ul>
      </div>
      <div className="grid grid-cols-3 ">
        {countries.map((country) => (
          <Country
            key={country.id}
            handleVisit={handleVisit}
            country={country}
            handleRemove={handleRemove}
          ></Country>
        ))}
      </div>
    </>
  );
}

export default App;
