# NEXUS - An Image Searching App

Nexus is a comprehensive image search application designed to efficiently locate a specific individual within a collection of images. Leveraging the power of the MERN stack, Nexus provides a seamless user experience from image upload to result retrieval.

Nexus empowers users to swiftly sift through vast image repositories, making it an invaluable tool for various applications such as image management, security, and personal archiving. With its intuitive interface and robust backend processing, Nexus sets a new standard for image search efficiency.

Watch demo at:
https://youtu.be/LNRnkKzTwlo

## How it works

- User Interaction: Users initiate a search by uploading a reference image along with a collection of target images.
- Backend Processing: The uploaded data is sent to the backend where the magic happens. Utilizing Python, the backend extracts the facial features from the reference image and compares them against the target images.
- Facial Recognition: Using sophisticated facial recognition algorithms, Nexus identifies the presence of the individual depicted in the reference image within the target images.
- Result Compilation: Once a match is found, the corresponding target image is copied and stored in a designated folder for easy retrieval.
- User Feedback: Users are promptly notified once the search is complete, and all relevant images are ready for viewing.


## Key Technologies used : 

Frontend 

- React - The frontend is developed using React, offering a dynamic and responsive user interface.
- EmailJS - Enables seamless email integration for user notifications.
- GSAP -Provides advanced animation capabilities for enhanced user experience..
- React Router DOM - Facilitates smooth navigation within the application.
- React Tilt & Parallax Tilt - Enhances the visual appeal with interactive tilt effects
- React Toastify - Offers user-friendly toast notifications for important updates.

Backend 

- Express- TPowers the backend server, handling HTTP requests and responses.
- MongoDB & Mongoose: - Utilized for efficient data storage and management.
- Cloudinary -Integrates cloud-based image storage and manipulation capabilities.
- Multer -Enables effortless handling of file uploads.
- CORS - Ensures secure communication between frontend and backend.
- Nodemon - Facilitates automatic server restarts during development for a smoother workflow.


## Installation

NEXUS requires [Node.js](https://nodejs.org/) v10+ to run.
In order to run this project install the following packages for the frontend and backend

Install the packages for frontend  and start the server.

```sh
npm i
npm i react-router-dom 
npm i @emailjs/browser
npm i react-toastify
npm i gsap
npm i axios
npm i react-parallax-tilt
npm i react-tilt
npm i sass
```

Install the packages for backend  and start the server.

```sh
npm i
npm i express
npm i mongoose
npm i mongodb
npm i cors
npm i cloudinary
npm i child-process
npm i multer
npm i nodemon
npm i python-shell
```

Install the packages for python for execution of the script.

```sh
pip install face_recognition
pip install dlib
```



## License

GNU - General Public License

