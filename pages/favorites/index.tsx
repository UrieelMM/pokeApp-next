import React, { useState, useEffect, FC } from "react";
import { Layout } from "../../components/layouts";
import FavoritesPokemons from "../../components/pokemon/FavoritesPokemons";
import NotFavorites from "../../components/ui/NotFavorites";
import { localFavorites } from "../../utils";

const FavoritesPage: FC = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout>
      {favoritesPokemons.length <= 0 ? (
        <NotFavorites />
      ) : (
        <FavoritesPokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
