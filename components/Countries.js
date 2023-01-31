import React from "react";
import SingleCountry from './SingleCountry'

const Countries = ({ searchedCountries }) => {
    if (searchedCountries.length >= 10) {
        return (
            <div>
              <p className="text-2xl text-white">too many countries to list, please narrow your search</p>
            </div>
          )
    }
    
    if (searchedCountries.length === 1) {
    return (
        <div>
<SingleCountry searchedCountries={searchedCountries} />
        </div>
    )
    }

    if (searchedCountries.length === 0) {
        return (
            <div>
    <p className="text-2xl text-white">No Results</p>
            </div>
        )
        }

    return (
        <ul>
            {searchedCountries.map(c => <li className="text-2xl text-white py-2 text-center" key={c.name}>{c.name}</li>)}
        </ul>
    )
}

export default Countries