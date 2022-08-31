import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import NextLink from "next/link";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <div>
        <NextLink href="/" passHref>
          <Link css={{ display: "flex", alignItems: "center" }}>
            <Image
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
              alt="Icono Aplicación"
              width={70}
              height={70}
            />
            <Text color="white" h2>
              P
            </Text>
            <Text color="white" h3>
              okémons
            </Text>
          </Link>
        </NextLink>
      </div>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favorites
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
