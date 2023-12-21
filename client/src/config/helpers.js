// Function to download the content of a canvas as an image
export const downloadCanvasToImage = () => {
  // Select the canvas element from the DOM
  const canvas = document.querySelector("canvas");

  // Convert the content of the canvas to a data URL
  const dataURL = canvas.toDataURL();

  // Create an anchor element for downloading
  const link = document.createElement("a");

  // Set the href attribute of the anchor to the data URL
  link.href = dataURL;

  // Set the download attribute to specify the filename
  link.download = "canvas.png";

  // Append the anchor element to the document body
  document.body.appendChild(link);

  // Simulate a click on the anchor element to trigger the download
  link.click();

  // Remove the anchor element from the document body
  document.body.removeChild(link);
};

// Async function to read the content of a file as a data URL
export const reader = (file) =>
  new Promise((resolve, reject) => {
    // Create a FileReader instance
    const fileReader = new FileReader();

    // Set up an event handler for when the file reading is complete
    fileReader.onload = () => resolve(fileReader.result);

    // Read the file as a data URL
    fileReader.readAsDataURL(file);
  });

// Function to get the contrasting color (black or white) based on the input color
export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color using the formula for relative luminance
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white based on the brightness threshold
  return brightness > 128 ? "black" : "white";
};
