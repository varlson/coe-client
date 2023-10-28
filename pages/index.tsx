import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import Spinner from "../components/ui/Spinner";
import Index from "../components/pages/Index";
import { homeDescriptionMetaInformation } from "../constants/constants";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) return <Spinner />;
  return (
    <>
      <Head>
        <title>Colegiado do Curso da Engenharia Elétrica </title>
        {/* <link rel="shortcut icon" href="/favicon/favicon.ico" /> */}
        <meta name="description" content={homeDescriptionMetaInformation} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <Index />
      </main>
    </>
  );
}
