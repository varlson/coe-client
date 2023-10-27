import React from "react";

function index() {
  return (
    <div className="bg-darkLight">
      <div className="w-9/12 m-auto py-5">
        <form
          action=""
          className="bg-white w-4/5 m-auto grid grid-cols-6 gap-5 p-10 rounded"
        >
          <h3 className="col-span-6 text-center font-Jura font-extrabold p-3">
            Adicione Novo Usuario
          </h3>
          <input
            required
            className="input col-span-6"
            type="text"
            placeholder="Nome do usuario"
          />

          <input
            required
            className="input col-span-3"
            type="email"
            placeholder="exemplo@email.com"
          />

          <select
            className=" cursor-pointer col-span-3 p-3 text-center"
            name=""
            id=""
          >
            <option className="p-2 cursor-pointer" selected value="Admin">
              Admin
            </option>
            <option className="p-2 cursor-pointer" value="Super Admin">
              Super Admin
            </option>
          </select>

          <input
            className="input col-span-3"
            type="password"
            placeholder="Senha"
          />

          <input
            className="input col-span-3"
            type="password"
            placeholder="Repetir senha"
          />

          <button
            type="submit"
            className="col-span-6 rounded text-white px-4 py-3 bg-basicRed"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default index;
