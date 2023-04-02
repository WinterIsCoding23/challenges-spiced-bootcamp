import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

/* *** Task 1 ***
  const searchString = event.target.value;

  const foundCountry = countries.find((country) => country.name.toLowerCase().startsWith (searchString));

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }
});
*/

  const searchString = event.target.value;

  const foundCountries = countries.filter((country) => country.name.toLowerCase().startsWith (searchString));
  console.log(foundCountries);

  foundCountries.map((country) => {
    //if (country) {
    const countryElement = Country(country);
    container.append(countryElement);
    //}
  });
});

