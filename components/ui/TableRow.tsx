import React from "react";

type TableProps = {
  row: {
    one: string;
    two: string;
    tree: string;
    four: string;
  };
};

function TableRow({ row }: TableProps) {
  const { one, two, tree, four } = row;
  return (
    <tr className=" p-2 ">
      <td>{one}</td>
      <td>{two}</td>
      <td>{tree}</td>
      <td>{four}</td>
    </tr>
  );
}

export default TableRow;
