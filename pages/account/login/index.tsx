import React, { ChangeEvent, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { login } from "../../../services/api";
function index() {
  const [credential, setCredential] = useState({
    username: "mani@gmai.com",
    password: "pass123",
  });

  const credentialHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const status = await signIn("credentials", {
        redirect: false,
        email: credential.username,
        password: credential.password,
        callbackUrl: "/",
      });

      if (status.ok) {
        console.log("loged");
      } else {
        console.log("not loged");
        // router.push(status.url)
      }
    } catch (error) {
      console.log("cath error");
      console.log(error);
    }
  };

  return (
    <div className="bg-darkLight p-0 m-0">
      <div className=" grid place-items-center w-9/12 m-auto ">
        <form onSubmit={submitHandler} action="" className=" w-full ">
          <div className="w-3/5 m-auto gap-10 my-10 p-10 grid col-span-1 border shadow-md bg-white">
            <input
              value={credential.username}
              onChange={credentialHandle}
              placeholder="exemplo@email.com"
              className="input"
              type="email"
              required
              name="username"
            />
            <input
              name="password"
              onChange={credentialHandle}
              value={credential.password}
              placeholder="**************"
              className="input"
              type="password"
              required
            />
            <button
              className="px-4 py-3 bg-basicRed text-white rounded"
              type="submit"
            >
              {" "}
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default index;
