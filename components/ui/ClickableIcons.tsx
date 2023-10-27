import React from "react";
import { showMenuProp } from "../../test/datas";

function ClickableIcons({ showMenuHandler }: showMenuProp) {
  return (
    <div>
      <img
        onClick={showMenuHandler}
        className="object-contain h-12"
        src="/icons/menu.png"
        alt=""
      />
    </div>
  );
}

export default ClickableIcons;
