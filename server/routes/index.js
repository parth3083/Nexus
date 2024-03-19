var express = require('express');
var router = express.Router();
const { spawn } = require('child_process');

/*  home page. */
router.get('/', async (req, res, next) => {
  try {
    const pythonProcess = spawn('python', ['routes/python/main.py']);

    let output = '';
    pythonProcess.stdout.on('data', (chunk) => {
      output += chunk.toString();
    });

    pythonProcess.on('error', (error) => {
      console.error('Error running Python script:', error);
      res.status(500).send('Internal Server Error');
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        if (output.includes("Folder 'folder' already exists.")) {
          console.log("Folder already exists.");
        } else if (output.startsWith("List of image files in")) {
          const imageFileList = output.split('\n').slice(2); 
          console.log("Image files:", imageFileList);
        } else {
          console.log("Python script output:", output); 
        }
        res.render('index');
      } else {
        console.error(`Python script exited with code: ${code}`);
        res.status(500).send('Internal Server Error');
      }
    });
  } catch (error) {
    console.error('Error during Python script execution:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
