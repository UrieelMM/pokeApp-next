import React, { useState } from "react";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Container, Grid, Image, Text, Card, Button } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";
import { localFavorites, getPokemonInfo } from "../../utils";

import confetti from "canvas-confetti";
import { PokemonListResponse } from "../../interfaces/pokemon-list";

interface Props {
  pokemon: Pokemon;
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(
    localFavorites.existInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;
    else {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { x: 1, y: 0 },
      });
    }
  };
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xl={5} sm={4} xs={12}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world?.front_default ||
                  "no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={400}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xl={7} xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text
                h1
                transform="uppercase"
                css={{
                  textGradient: "45deg, #a05bdc -10%, #3e5ff0 73%",
                }}
              >
                {pokemon.name}
              </Text>
              <Button
                onClick={onToggleFavorite}
                color="gradient"
                ghost={!isInFavorites}
              >
                {isInFavorites ? "Remove from favorites" : "Add to favorites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30} css={{ textAlign: "center" }}>
                Sprites:{" "}
              </Text>
              <Container direction="row" display="flex" gap={4}>
                <Image
                  width={100}
                  height={100}
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <Image
                  width={100}
                  height={100}
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                />
                <Image
                  width={100}
                  height={100}
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                />
                <Image
                  width={100}
                  height={100}
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemonName: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonName.map((name) => ({ params: { name } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);
  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPageByName;
