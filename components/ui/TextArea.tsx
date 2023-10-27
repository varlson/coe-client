import React from "react";

type textAreaProps = {
  rows: number;
};
function TextArea({ rows }: textAreaProps) {
  return (
    <div>
      <textarea
        rows={rows}
        className="text-justify text-sm text-white font-Jura rounded  p-4 bg-darkRed w-full"
      />
    </div>
  );
}

export default TextArea;
