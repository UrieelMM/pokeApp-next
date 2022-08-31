import React from "react";
import { Container, Text, Image } from "@nextui-org/react";

const NotFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text css={{ fontSize: "40px" }}>There not favorites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
        alt="IvySaur"
        width={250}
        height={250}
        css={{ opacity: 0.5 }}
      />
    </Container>
  );
};

export default NotFavorites;
