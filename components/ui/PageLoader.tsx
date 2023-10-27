import React from "react";
import { ThreeDots } from "react-loader-spinner";

function PageLoader({ color }: { color: string }) {
  return (
    <div>
      <ThreeDots color="red" />
    </div>
  );
}

export default PageLoader;
