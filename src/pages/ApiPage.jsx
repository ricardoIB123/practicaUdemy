import { useEffect, useState } from "react";
import { ButtonRetroceder } from "./ui/buttons/buttonRetroceder";

export const ApiPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        console.log("datos", data.results);
      }).catch((error) => console.error("Error de codigo", error));
  }, []);
  return (
    <>
      <ButtonRetroceder />
      {/* <div> 
        {pokemons?.abilities?.length > 0 && (
          <span>Habilidades: {pokemons.abilities[0].ability.name} </span>
        )}
      </div>
      <div className="m-10">
        {pokemons?.stats?.length > 0 && (
        <span>Stats: {pokemons.stats[3].base_stat} </span>
      )}
      </div>*/}
      <div className="flex flex-col text-2xl">
        {
          pokemons?.map((items, index) => (
            <span key={index}>
              {items.name}
            </span>
          ))
        }
      </div>
    </>
  );
};
