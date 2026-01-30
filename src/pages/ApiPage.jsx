import { use, useEffect, useState } from "react";
import { ButtonRetroceder } from "./ui/buttons/buttonRetroceder";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const ApiPage = () => {
  const [apis, setApis] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { data, isLoading, error } = useQuery({
    queryKey: ["consultas a pokemonapi"],
    queryFn: async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20",
      ).then((res) => res.json());
      return res.results;
    },
  });
  if (isLoading) return <span>Cargando...</span>;
  if (error) return <span>Error... {error.message} </span>;

  {
    /* useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => {
        setApis(res.data.results);
        setCargando(false);
        console.log("data", res);
      })
      .catch((error) => console.error("Error en la api", error));
    {
      /* A diferencia de fetch, que tienes que convertir la respuesta en json, axios lo hace automaticamente y tiene una funcion para cargar */
  }

  {
    /*  fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
            .then((res) => res.json())
            .then((data) => {
                setApis(data.results);
                console.log("data", data.results)
            }).catch((error) => console.error("Error en el codigo", error));
    
  }, []);* */
  }
  return (
    <>
      <ButtonRetroceder />
      <div className="h-screen bg-amber-300 text-black">
        <section className="flex flex-col pt-20 text-2xl">
          {data?.map((item, index) => (
            <span key={index}> {item.name} </span>
          ))}
        </section>
      </div>
    </>
  );
};
