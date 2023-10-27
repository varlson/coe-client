import React from "react";
import { Avatar } from "./Ui";

type userProp = {
  name: string;
  username: string;
};

function UserAvatar({ name, username }: userProp) {
  return (
    <div className="flex">
      <div className="">
        <Avatar img="user" />
      </div>
      <div className="self-center ">
        <p className="">{name}</p>
        <p className=" font-light">{username}</p>
      </div>
    </div>
  );
}

export default UserAvatar;
