import React from "react";
import { RotatingLines } from "react-loader-spinner";
function Spinner({
  color = "red",
  width = "75",
  strokeWidth = "3",
}: {
  color?: string;
  width?: string;
  strokeWidth?: string;
}) {
  return (
    <div>
      <RotatingLines
        strokeColor={color}
        strokeWidth={strokeWidth}
        animationDuration="0.75"
        width={width}
        visible={true}
      />
    </div>
  );
}

export default Spinner;
