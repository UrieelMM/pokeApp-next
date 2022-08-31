import React, { FC } from "react";
import { useRouter } from "next/router";
import { Grid, Card } from "@nextui-org/react";

interface Props {
  id: number;
}

const FavoriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/pokemon/${id}`);
  };
  return (
    <Grid key={id} xs={6} sm={6} md={4} lg={3} onClick={handleClick}>
      <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={100}
          height={100}
        />
      </Card>
    </Grid>
  );
};

export default FavoriteCard;
