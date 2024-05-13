
# NEXUS - An Image Searching App
<br/>
<br/>
Nexus is a comprehensive image search application designed to efficiently locate a specific individual within a collection of images. Leveraging the power of the MERN stack, Nexus provides a seamless user experience from image upload to result retrieval.
<br/>
<br/>
Watch demo at : <br/>
https://youtu.be/LNRnkKzTwlo
<br/><br/><br/>
How it Works:
<br/>
<br/>
User Interaction: Users initiate a search by uploading a reference image along with a collection of target images.<br/>
<br/>

Backend Processing: The uploaded data is sent to the backend where the magic happens. Utilizing Python, the backend extracts the facial features from the reference image and compares them against the target images.<br/>
<br/>
Facial Recognition: Using sophisticated facial recognition algorithms, Nexus identifies the presence of the individual depicted in the reference image within the target images.<br/>
<br/>
Result Compilation: Once a match is found, the corresponding target image is copied and stored in a designated folder for easy retrieval.<br/>
<br/>
User Feedback: Users are promptly notified once the search is complete, and all relevant images are ready for viewing.<br/>
<br/>
Key Technologies Used:<br/>
<br/>
Frontend:

React: The frontend is developed using React, offering a dynamic and responsive user interface.<br/><br/>
EmailJS: Enables seamless email integration for user notifications.<br/><br/>
GSAP: Provides advanced animation capabilities for enhanced user experience.<br/><br/>
React Router DOM: Facilitates smooth navigation within the application.<br/><br/>
React Tilt & Parallax Tilt: Enhances the visual appeal with interactive tilt effects.<br/><br/>
React Toastify: Offers user-friendly toast notifications for important updates.<br/><br/><br/>
Backend:
<br/>
Express: Powers the backend server, handling HTTP requests and responses.<br/><br/>
MongoDB & Mongoose: Utilized for efficient data storage and management.<br/><br/>
Cloudinary: Integrates cloud-based image storage and manipulation capabilities.<br/><br/>
Multer: Enables effortless handling of file uploads.<br/><br/>
CORS: Ensures secure communication between frontend and backend.<br/><br/>
Nodemon: Facilitates automatic server restarts during development for a smoother workflow.<br/><br/>
Nexus empowers users to swiftly sift through vast image repositories, making it an invaluable tool for various applications such as image management, security, and personal archiving. With its intuitive interface and robust backend processing, Nexus sets a new standard for image search efficiency.
