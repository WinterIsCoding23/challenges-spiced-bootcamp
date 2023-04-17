import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  //const [page, setPage] = useState(0);        // ...used for alternative solution (see below) 
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  )

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          url
        );
        const data = await response.json();
        //console.log(response);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);          // ...whenever the url changes, do "useEffect" (aka fetch) 

  // function handleNextClick (){
  //   setPage(page+20);
  // }

  // function handlePreviousClick (){
  //   setPage(page-20);
  // }
  // --> both functions work - but not ideal since less flexible (e.g. amount of 20 pokemon per page changes in future) 

  const nextPage = () => {
    setUrl(pokemon.next);
  }

  const previousPage = () => {
    setUrl(pokemon.previous);
  }


  return (
    <main>
      {pokemon?.previous && (<button type="button" onClick={previousPage}>Previous Page</button>)} 
      
      {pokemon?.next && (<button type="button" onClick={nextPage}>Next Page</button>)}  
      <ul>
        {pokemon?.results?.map(({ name }) => (        // ?: if pokemon exists, go ahead, check if results exists, then do what being told
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}


// line 47: alternative to "?": pokemon && pokemon.results && pokemon.results.map (...)
// nexPage-button: also should receive the same logic for when reaching end of list
// to display the API-response in the browser: console - XHR - response
