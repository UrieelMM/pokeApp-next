import React, { FC } from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
  title?: string;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Urieel Dev" />
        <meta name="description" content="Pokemon App" />
        <meta name="keywords" content="pokemon, app, react, next" />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
