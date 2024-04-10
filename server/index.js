const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process"); // Added for Python execution

const app = express();
app.use(cors());
app.use(express.json());

// Construct the absolute path to the "known" folder dynamically
const knownFolder = path.join(__dirname, "./images/known");

const singleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, knownFolder); // Use the constructed path
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});

const multipleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/dataset"); // Existing path
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});

const singleUpload = multer({ storage: singleStorage }).single("singleFile");
const multipleUpload = multer({ storage: multipleStorage }).array(
  "multipleFiles"
);

app.post("/upload/single", singleUpload, (req, res) => {
  try {
    console.log(req.file); // Log uploaded single file details
    res.send({ message: "Single file uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error uploading single file!" });
  }
});

app.post("/upload/multiple", multipleUpload, async (req, res) => {
  try {
    console.log(req.files); // Log uploaded multiple files details

    // Check if both single and multiple files were uploaded (optional)
    if (!req.file && !req.files.length) {
      return res.status(400).send({ message: "No files uploaded!" });
    }

    await handleUploadCompletion(req.files); // Call async function for Python execution
    res.send({ message: "Multiple files uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error uploading multiple files!" });
  }
});

async function handleUploadCompletion(uploadedFiles) {
  // Call the Python script using spawn (replace 'python_script.py' with the actual filename)
  const pythonProcess = spawn("python", [
    "./images/main.py",
    uploadedFiles.length,
  ]); // Pass number of uploaded files

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString()); // Log Python script output
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString()); // Log Python script errors
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python script exited with code ${code}`);
  });
}

app.listen(3001, () => {
  console.log("http://localhost:3001");
});
