import React from 'react';

type Props = {
  data: any;
};

export const PokeInfo: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data && (
        <div className="poke-info">
          <h1>{data.name}</h1>
          <img className="poke-info-photo" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt={`${data.name}`} />
          <div className="abilities">
            {data.abilities.map((poke: { ability: { name: string }; }) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke: {
              stat: {
                name: string | number
              };
              base_stat: number
            }) => {
              return (
                <>
                  <h3>
                    {poke.stat.name}
                    :
                    {poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
        </div>
      )}

    </>
  );
};
