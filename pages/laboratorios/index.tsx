import React from "react";
import View from "../../components/ui/View";
import { labs } from "../../constants/constants";

function page() {
  return (
    <div className="lg:w-9/12 m-auto ">
      {labs.map((lab, index) => (
        <div key={index}>
          <View lab={lab} />
        </div>
      ))}
    </div>
  );
}

export default page;
