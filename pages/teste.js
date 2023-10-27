import React, { useState } from "react";
import axios from "axios";
const ImageUploadForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("description", description);
    formData.append("file", selectedImage);

    console.log(formData);

    try {
      const response = await axios.post("/api/nova", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        console.log("Upload de imagem concluído com sucesso.");
        // Realizar alguma ação após o upload, se necessário
      } else {
        console.error("Falha no upload de imagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar a imagem:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ImageUploadForm;
