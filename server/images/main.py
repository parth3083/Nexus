import os
import face_recognition
import shutil

def copy_image_to_existing_folder(parent_folder, existing_folder_name, image_filename):
    """
    Copies an image from the parent folder to the specified existing folder.

    Args:
        parent_folder (str): Path to the parent folder containing the image.
        existing_folder_name (str): Name of the existing folder to copy the image to.
        image_filename (str): Name of the image file to be copied.
    """

    parent_folder_path = os.path.abspath(parent_folder)
    existing_folder_path = os.path.join(parent_folder_path, existing_folder_name)

    if os.path.exists(existing_folder_path):
        image_path = os.path.join(parent_folder_path, image_filename)

        if os.path.exists(image_path):
            shutil.copy(image_path, existing_folder_path)
            print(f"Image '{image_filename}' copied to '{existing_folder_path}'.")
        else:
            print(f"Image '{image_filename}' not found in the parent folder.")
    else:
        print(f"Folder '{existing_folder_path}' does not exist.")

def read_all_images(folder_path):
    """
    Reads all image files from a specified folder.

    Args:
        folder_path (str): Path to the folder containing image files.

    Returns:
        list: List of image filenames (if any are found).
    """

    folder_path = os.path.abspath(folder_path)

    if not os.path.exists(folder_path):
        print(f"Folder '{folder_path}' does not exist.")
        return []  

    all_files = os.listdir(folder_path)
    image_files = [
        file for file in all_files
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))
    ]

    print(f"List of image files in '{folder_path}':")
    for image_file in image_files:
        print(image_file)

    
    known_folder_path = os.path.join(os.path.dirname(__file__), "known")  
    known_image_files = os.listdir(known_folder_path)
    if known_image_files:
        known_image_path = os.path.join(known_folder_path, known_image_files[0])
        known_image = face_recognition.load_image_file(known_image_path)
    else:
        print("No image found in the 'known' folder.")
        return []  

    
    for image_file in image_files:
        unknown_image = face_recognition.load_image_file(os.path.join(folder_path, image_file))

        try:
           
            unknown_encodings = face_recognition.face_encodings(unknown_image)
            if unknown_encodings:
                biden_encoding = face_recognition.face_encodings(known_image)[0]
                unknown_encoding = unknown_encodings[0]
                results = face_recognition.compare_faces([biden_encoding], unknown_encoding)
                print(type(results))
                if results[0] == True:
                    print(results)
                    copy_image_to_existing_folder(folder_path, "folder", image_file)  
        except IndexError:
            print(f"No faces detected in image '{image_file}'.")

    return image_files  


image_files = read_all_images("./images/dataset")  
