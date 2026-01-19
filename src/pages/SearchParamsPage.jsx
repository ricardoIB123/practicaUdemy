import { useSearchParams } from 'react-router-dom';

export const SearchParamsPage = () => {
  // 1. Desestructuramos igual que un useState
  // searchParams: Para LEER la URL
  // setSearchParams: Para ESCRIBIR en la URL
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. Cómo LEER un valor
  // Ojo: Usamos .get(), no punto (.)
  const filtroActual = searchParams.get('prioridad'); // Puede ser "alta", "baja" o null

  return (
    <div>
      <h1>Lista de Servicios</h1>
      <p>Filtro actual: {filtroActual || 'Ninguno'}</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        {/* 3. Cómo ESCRIBIR (Actualizar la URL) */}
        
        <button onClick={() => setSearchParams({ prioridad: 'alta' })}>
          Ver Urgentes
        </button>
        
        <button onClick={() => setSearchParams({ prioridad: 'baja' })}>
          Ver Normales
        </button>

        <button onClick={() => setSearchParams({})}>
          Limpiar Filtros
        </button>
      </div>

      {/* Aquí abajo renderizarías tu tabla filtrando según 'filtroActual' */}
    </div>
  );
};