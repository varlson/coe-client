import multer from "multer";

const upload = multer({ dest: "./public/uploads" }); // Specify the directory to save the uploaded files

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  upload.single("file")(req, res, (err) => {
    if (err) {
      res.status(500).json({ error: "Error uploading file" });
      return;
    }

    const filePath = req.file.path;
    const { title, body } = req.body;
    res
      .status(200)
      .json({
        message: "File uploaded successfully",
        file: filePath,
        title: title,
        body: body,
      });
  });
}
