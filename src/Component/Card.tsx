import React from 'react';

type Props = {
  pokemons: Array<any>,
  loading: boolean,
  infoPokemon: (poke: any) => void,
};

export const Card: React.FC<Props> = ({ pokemons, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemons.map(pokemon => {
          return (
            /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
            <div
              role="button"
              tabIndex={0}
              className="card"
              key={pokemon.id}
              onClick={() => infoPokemon(pokemon)}
            >
              <div className="photo-conteiner">
                <img className="photo-pok" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={`${pokemon.name}`} />
              </div>
              <h3 className="poke-name">{pokemon.name}</h3>
              <div className="poke-type-conteiner">
                {pokemon.types.map((t: { type: { name: string; }; }) => {
                  return (
                    <div
                      className="poke-type"
                      key={pokemon.id}
                    >
                      {t.type.name}
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })
      )}
    </>
  );
};
