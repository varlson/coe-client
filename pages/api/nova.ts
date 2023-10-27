import { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";
import axios from "axios";

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }); // Especifique o diretório para salvar os arquivos enviados

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  upload.single("file")(req, res, (err: any) => {
    if (err) {
      res.status(500).json({ error: "Error uploading file" });
      return;
    }

    const file = req.file;
    const { title, body } = req.body;

    console.log(title, body, file);

    res.status(200).json({
      message: "File uploaded successfully",
      file: file,
      title: title,
      body: body,
    });
  });
}
