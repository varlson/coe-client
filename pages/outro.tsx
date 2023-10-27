import { useState } from "react";
import { addSlides } from "../services/api";

const FileUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const [dados, setDados] = useState({ title: "", body: "" });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
    }
  };

  const changeHandle = (e: any) => {
    const { name, value } = e.target;

    setDados((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", dados.title);
      formData.append("body", dados.body);
      console.log(formData);

      // try {
      //   const response = await fetch("http://localhost:3222/api/slide", {
      //     method: "POST",
      //     body: formData,
      //   });

      //   // Handle the response from the server

      //   const res = await response.json();
      //   console.log(res);
      // } catch (error) {
      //   console.error("Error uploading file:", error);
      // }

      addSlides(formData)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={dados.title}
        onChange={changeHandle}
        id=""
      />

      <input
        type="text"
        name="body"
        value={dados.body}
        onChange={changeHandle}
        id=""
      />

      <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUploadForm;
