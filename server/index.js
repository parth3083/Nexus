const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process"); 
const fs = require("fs");
const mongoose = require("mongoose");
const { log } = require("console");
const ImageModel = require("./models");
const {cloudinary}=require('./utils/cloudinary')
const app = express();


app.use(cors());
app.use(express.json());


const knownFolder = path.join(__dirname, "./images/known");
const datasetFolder = path.join(__dirname, "./images/dataset");
const sortedImagesFolder = path.join(__dirname, "./images/dataset/folder");
var username;


mongoose
  .connect(
    "mongodb+srv://parthbrajput30:V9UKzaw1YPy01Jxl@cluster0.rnsee4t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connection done successfully 🔥🔥🔥🔥"))
  .catch((err) => console.log("Error" + err));

const singleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, knownFolder); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "_" + uniqueSuffix);
  },
});

const multipleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, datasetFolder); 
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
    console.log(req.file); 
    res.send({ message: "Single file uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error uploading single file!" });
  }
});

app.post("/upload/multiple", multipleUpload, async (req, res) => {
  try {
    username=req.body.name
    console.log(req.files); 

    if (!req.file && !req.files.length) {
      return res.status(400).send({ message: "No files uploaded!" });
    }

    await handleUploadCompletion(req.files);
    res.send({ message: "Multiple files uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Error uploading multiple files!" });
  }
});

// CALLING THE PYTHON SCRIPT  

async function handleUploadCompletion(uploadedFiles) {
 
  const pythonProcess = spawn("python", [
    "./images/main.py",
    uploadedFiles.length,
  ]); 

  pythonProcess.stdout.on("data", (data) => {
    console.log(data.toString()); 
  });

  pythonProcess.stderr.on("data", (data) => {
    console.error(data.toString()); 
  });

  pythonProcess.on("close", (code) => {
    console.log(`Python script exited with code ${code}`);

    if (code === 0) {
     
      fetchImages();
    }
  });
}

// FETCHING THE IMAGES FROM THE FOLDER AND STORING THEM INTO THE CLODINARY AND STORING THEIR SECURE URL TO THE MONGODB 
function fetchImages() {
  fs.readdir(sortedImagesFolder, async (err, files) => {
    if (err) {
      console.error("Error reading sorted images folder:", err);
      return;
    }
    let uploadcount = 0;
    try {
      for (const file of files) {
        const imagePath = path.join(sortedImagesFolder, file);
        const result = await cloudinary.uploader.upload(imagePath)
        const url = result.secure_url
        const image_upload = new ImageModel({
          Sorted_image_string: url,
          name:username
        });
        await image_upload.save();
        console.log(image_upload.Sorted_image_string);
        console.log(image_upload.name);
        console.log(result)
        uploadcount++;
        // Delete all files in the dataset folder
        if (uploadcount == files.length) {
          deleteFiles();
        }
      }
    } catch (err) {
      console.error("Error saving images to MongoDB:", err);
    }
  });
}

// DELETING THE IMAGES FROM THE FOLDERS 
function deleteFiles() {
fs.readdir(datasetFolder, (err, files) => {
  if (err) {
    console.error("Error reading dataset folder:", err);
    return res.status(500).json({ message: "Internal server error." });
  }

  files.forEach(file => {
    const filePath = path.join(datasetFolder, file);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      } else {
        console.log(`Deleted file: ${filePath}`);
      }
    });
  });
});
fs.readdir(sortedImagesFolder, (err, files) => {
  if (err) {
    console.error("Error reading sorted folder:", err);
    return res.status(500).json({ message: "Internal server error." });
  }

  files.forEach(file => {
    const filePath = path.join(sortedImagesFolder, file);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      } else {
        console.log(`Deleted file: ${filePath}`);
      }
    });
  });
});

fs.readdir(knownFolder, (err, files) => {
  if (err) {
    console.error("Error reading known folder:", err);
    return res.status(500).json({ message: "Internal server error." });
  }

  files.forEach(file => {
    const filePath = path.join(knownFolder, file);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      } else {
        console.log(`Deleted file: ${filePath}`);
      }
    });
  });
});
}

// FETCHING ALL THE SECURE URL OF THE IMAGES FROM THE MONGODB TO SEND IT TO REACT APP 
app.get('/sorted-images', async (req, res) => {
  try {
   
    const fetched_data = await ImageModel.find({ name: username });
    res.json(fetched_data);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: err.message });
  }
});
app.listen(3001, () => {
  console.log("http://localhost:3001");
});
