import React from "react";

const SingleCountry = ({ searchedCountries }) => {

    console.log(searchedCountries)

    return (
 <div className="flex h-screen text-center">
    <div className="mx-auto text-2xl text-white py-2">
  {searchedCountries.map(c => <p key={c.name}> Capital: {c.capital}</p>)}
  {searchedCountries.map(c => <p key={c.name}> Area: {c.area}</p>)}
  {searchedCountries.map(c => <p key={c.name}> Region: {c.region}</p>)}
  {searchedCountries.map(c => <p key={c.name}> Subregion: {c.subregion}</p>)}
  {searchedCountries.map(c => <p key={c.name}> Population: {c.population}</p>)}
  {searchedCountries.map(c => <img key={c.id} className="max-w-3xl" src={Object.values(c.flags)[0]} alt="" /> )}
  </div>
        </div>
    )
}

export default SingleCountry