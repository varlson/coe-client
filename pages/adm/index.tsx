import React from "react";
import UserAvatar from "../../components/ui/Avatar";
import { AdmMenuItem } from "../../components/ui/Ui";
function index() {
  return (
    <div className="lg:w-9/12 m-auto">
      <UserAvatar username="adm@email.com" name="user" />
      <div className="grid shadow border px-2 py-5 rounded  bg-darkRed ">
        <div className="grid-cols-4 grid gap-4 justify-self-center m-auto">
          <AdmMenuItem label="Editais" img="edital" link="" />
          <AdmMenuItem label="Posts" img="post" link="" />
          <AdmMenuItem label="Slides" img="slide" link="/adm/slides" />
          <AdmMenuItem
            label="Usuarios"
            img="account"
            link="/account/add-user"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
