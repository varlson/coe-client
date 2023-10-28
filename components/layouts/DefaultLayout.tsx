import React, { PropsWithChildren, useEffect, useState } from "react";
import Footer from "../partials/Footer";
import Navbar from "../partials/Navbar";
import { useRouter } from "next/router";
import Head from "next/head";
export default function DefaultLayout({ children }: PropsWithChildren) {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [title, setTtitle] = useState("Colegiado Eng. Elétrica");
  useEffect(() => {
    console.log("navigate");
    console.log("current link " + currentUrl);

    if (currentUrl != "/") {
      const current = currentUrl.split("/")[currentUrl.split("/").length - 1];
      const formated =
        current[0].toUpperCase() + current.slice(1).toLocaleLowerCase();
      setTtitle(formated + "-" + "Colegiado Eng. Elétrica");
    }
  });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="grid">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
