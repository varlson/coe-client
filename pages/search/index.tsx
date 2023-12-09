"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [height, setHeight] = useState("0px");
  useEffect(() => {
    const header = document.getElementById("header") as HTMLDivElement;
    const footer = document.getElementById("footer") as HTMLDivElement;
    const search = document.getElementById("footer") as HTMLDivElement;
    const headerFooter = header.clientHeight + footer.clientHeight;
    search.style.height = `${100 - headerFooter}vh`;
  }, []);
  return (
    <div id="search" className={`w-9/12 m-auto p-2 bg-blue-400 `}>
      <p>search</p>
    </div>
  );
}

export default page;
