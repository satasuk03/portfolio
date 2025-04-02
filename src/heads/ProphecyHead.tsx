import Head from "next/head";
import React from "react";

export default function ProphecyHead({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>
          Fantasy Job Generator | Discover Your Magical Medieval Occupation
        </title>
        <meta
          name="description"
          content="Turn your phone number into a hilarious fantasy-medieval job! Find out if you're a Goblin Tax Collector, Potion Sommelier, or Royal Jester with our stat-based fate generator."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="fantasy job generator, medieval career, funny occupation, RPG stats, fate generator, character class finder"
        />
        <meta name="author" content="Your App Name or Team" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://magic.zeze.app/" />
        <meta property="og:title" content="Fantasy Job Generator" />
        <meta
          property="og:description"
          content="Discover your fantasy-medieval job based on your stats. Will you be a bard or a blacksmith? Try now!"
        />
        {/* <meta
          property="og:image"
          content="https://yourdomain.com/preview.png"
        /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://magic.zeze.app/" />
        <meta name="twitter:title" content="Fantasy Job Generator" />
        <meta
          name="twitter:description"
          content="A hilarious fantasy job generator based on RPG stats from your phone number."
        />
      </Head>
      {children}
    </>
  );
}
