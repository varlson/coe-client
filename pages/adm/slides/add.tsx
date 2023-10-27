import React, { FormEvent, useState } from "react";
import Input from "../../../components/ui/Input";
import TextArea from "../../../components/ui/TextArea";
import Icons from "../../../components/ui/Icons";
import { ISlide } from "../../../types/types";
import { addSlides } from "../../../services/api";

type blobType = string | null;

function add() {
  const [file, setFile] = useState<blobType>(null);
  const [currentfile, setCurrentFile] = useState<any>(null);
  const [slide, setSlide] = useState<ISlide>({
    title: "",
    image_url: "",
    id: "",
    body: "",
  });

  const changeFileHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const _file = e.target.files?.[0];
    setCurrentFile(_file);
    const blobUrl = URL.createObjectURL(_file as File);
    setFile(blobUrl);
  };

  const removeHandler = () => {
    setFile(null);
  };

  const setSlideField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSlide((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    // data.set("body", slide.body);
    data.append("file", currentfile);
    console.log(data);
  };

  return (
    <div className="w-9/12 m-auto p-2 ">
      <form onSubmit={submitHandle} className=" border-basicRed  shadow-md ">
        <p className="font-bold my-1 font-Jura text-center border-b border-darkRed pb-2">
          Adicione Slide
        </p>
        <div className=" w-8/12 m-auto grid">
          <div className="grid w-full gap-2">
            <div className="my-1">
              <p className="">Título de Slide</p>
              <input
                className="w-full bg-darkRed text-white font-Jura rounded h-10 px-4"
                type="type"
                name="title"
                value={slide.title}
                onChange={setSlideField}
              />
            </div>
            <div className="my-1">
              <p className="">Sobre Slide</p>
              <textarea
                name="body"
                value={slide.body}
                rows={15}
                className="text-justify text-sm text-white font-Jura rounded  p-4 bg-darkRed w-full"
                onChange={setSlideField}
              />
            </div>
          </div>
          <div className="my-2 justify-self-center">
            {!file && (
              <div>
                <label htmlFor="upload" className="cursor-pointer">
                  <img className="" src="/icons/upload.png" alt="" />
                </label>
                <input
                  name=""
                  onChange={changeFileHandle}
                  id="upload"
                  type="file"
                  className="hidden"
                />
              </div>
            )}
            {file && (
              <div className="my-1">
                <img
                  onClick={removeHandler}
                  className="h-10 cursor-pointer"
                  src="/icons/delete.png"
                  alt=""
                />
                <img src={file} alt="" />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="justify-self-end px-4 bg-basicRed py-1 rounded text-white "
          >
            Criar slide
          </button>
        </div>
      </form>
    </div>
  );
}

export default add;
