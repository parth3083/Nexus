import os
import face_recognition
import shutil

def copy_image_to_existing_folder(parent_folder, existing_folder_name, image_filename):
    # Specify the path of the parent folder
    parent_folder_path = os.path.abspath(parent_folder)

    # Specify the path of the existing folder
    existing_folder_path = os.path.join(parent_folder_path, existing_folder_name)

    # Check if the existing folder exists
    if os.path.exists(existing_folder_path):
        # Specify the path of the image in the parent folder
        image_path = os.path.join(parent_folder_path, image_filename)

        # Check if the image exists
        if os.path.exists(image_path):
            # Copy the image to the existing folder
            shutil.copy(image_path, existing_folder_path)
            print(f"Image '{image_filename}' copied to '{existing_folder_path}'.")
        else:
            print(f"Image '{image_filename}' not found in the parent folder.")
    else:
        print(f"Folder '{existing_folder_path}' does not exist.")

def read_all_images(folder_path):
    # Get the absolute path of the folder
    folder_path = os.path.abspath(folder_path)

    # Check if the folder exists
    if not os.path.exists(folder_path):
        print(f"Folder '{folder_path}' does not exist.")
        return

    # List all files in the folder
    all_files = os.listdir(folder_path)

    # Filter out only image files (you can add more extensions if needed)
    image_files = [file for file in all_files if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp'))]

    # Print the list of image files
    print(f"List of image files in '{folder_path}':")
    for image_file in image_files:
        print(image_file)

        # Load the known image outside the loop
        known_image = face_recognition.load_image_file("routes\python\known\one.jpg")

        # Load the unknown image from the loop iteration
        unknown_image = face_recognition.load_image_file(os.path.join(folder_path, image_file))

        biden_encoding = face_recognition.face_encodings(known_image)[0]
        unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

        results = face_recognition.compare_faces([biden_encoding], unknown_encoding)
        print(type(results))
        if(results[0] == True):
            print(results)
            copy_image_to_existing_folder(folder_path, "D:/Code/Web Development/project/Full stack/Nexus/server/routes/python/Dataset/folder", image_file)


folder_path = "folder"

# Check if the folder already exists, and if not, create it
# if not os.path.exists(folder_path):
#     os.makedirs(folder_path)
#     print(f"Folder '{folder_path}' created successfully.")
# else:
#     print(f"Folder '{folder_path}' already exists.")


# Example usage
image_folder_path = "routes\python\Dataset"
dataset_folder = os.path.join(folder_path, "folder")
if not os.path.exists(dataset_folder):
    os.makedirs(dataset_folder)
    print(f"Folder '{dataset_folder}' created successfully.")
image_files = read_all_images(image_folder_path)
