import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { PokeInfo } from './PokeInfo';

export const Main: React.FC = () => {
  const [pokeData, setPokeData] = useState<Array<any>>([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextUrl, setNextUrl] = useState();
  const [pokeInfo, setPokeInfo] = useState();

  const getPokemon = async (response: any[]) => {
    response.map(async (item) => {
      const result = await fetch(item.url).then(res => res.json());

      setPokeData((prevState) => {
        const newState = [...prevState, result];

        newState.sort((a, b) => a.id - b.id);

        return newState;
      });
    });
  };

  const pokeFun = async () => {
    setIsLoaded(true);
    const resultFetch = await fetch(url)
      .then(res => res.json());

    setNextUrl(resultFetch.next);
    getPokemon(resultFetch.results.slice(0, 12));
    setIsLoaded(false);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="title">
        <h1>Pokedex</h1>
      </div>

      <div className="container">
        <div className="left_content-container">
          <div className="left_content">
            <Card pokemons={pokeData} loading={isLoaded} infoPokemon={poke => setPokeInfo(poke)} />
          </div>

          <div className="btn-group">
            {nextUrl
              && (
            /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
                <button
                  type="button"
                  className="loadBt"
                  onClick={() => {
                    setUrl(nextUrl || '');
                  }}
                >
                  Load More
                </button>
              )}
          </div>
        </div>
        <div className="right_content">
          <PokeInfo data={pokeInfo} />
        </div>
      </div>
    </>
  );
};
