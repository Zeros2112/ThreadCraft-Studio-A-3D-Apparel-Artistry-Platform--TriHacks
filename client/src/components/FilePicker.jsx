import React from "react";

// Importing the CustomButton component for file type selection
import CustomButton from "./CustomButton";

// FilePicker component for handling file input and type selection
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    // Container for the file picker with styles and structure
    <div className="filepicker-container">
      {/* File input for selecting an image file */}
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* Label for the file input */}
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        {/* Displaying the selected file name or a message if no file is selected */}
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      {/* Container for buttons to choose file type (Logo or Full) */}
      <div className="mt-4 flex flex-wrap gap-3">
        {/* Button for selecting Logo file type */}
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        {/* Button for selecting Full file type */}
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
