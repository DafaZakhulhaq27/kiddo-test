import Head from "next/head";
import { Brands, Email, Features, Hero, Navbar } from "../components/organisms";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kiddo</title>
        <meta
          name="description"
          content="Kiddo.id is the first and leading kids enrichment marketplace in Indonesia."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <Email />
    </div>
  );
}
