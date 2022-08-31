import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import FavoriteCard from "./FavoriteCard";

interface Props {
  favoritesPokemons: number[];
}

const FavoritesPokemons: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritesPokemons.map((id) => {
        return <FavoriteCard key={id} id={id} />;
      })}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
