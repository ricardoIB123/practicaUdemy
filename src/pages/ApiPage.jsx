import { useEffect, useState } from "react";
import { ButtonRetroceder } from "./ui/buttons/buttonRetroceder";

export const ApiPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data);
        console.log("datos", data);
      });
  }, []);
  return (
    <>
      <ButtonRetroceder />
      <div>
        {pokemons?.abilities?.length > 0 && (
          <span>Habilidades: {pokemons.abilities[0].ability.name} </span>
        )}
      </div>
      <div className="m-10">
        {pokemons?.stats?.length > 0 && (
        <span>Stats: {pokemons.stats[3].base_stat} </span>
      )}
      </div>
    </>
  );
};
