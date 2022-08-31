import React, { FC } from "react";
import { Card, Grid, Text, Col } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  //useRouter
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid key={pokemon.id} xl={2} md={2} sm={3} xs={6} onClick={handleClick}>
      <Card hoverable clickable>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              {pokemon.name}
            </Text>
            <Text h4 color="white">
              # {pokemon.id}
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          objectFit="contain"
          width="100%"
          height={340}
          alt="Card image background"
          src={pokemon.img}
        />
      </Card>
    </Grid>
  );
};

export default PokemonCard;
