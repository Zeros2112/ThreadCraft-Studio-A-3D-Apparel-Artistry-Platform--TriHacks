# ThreadCraft Studio A 3D Apparel Artistry Platform @TriHacks

This repository contains the source code for a 3D Shirt + Car + Ring Customization App developed using React, Three.js, Framer Motion, and other libraries. The app allows users to customize the color, texture, and design of a 3D shirt, car and ring model.

## Demo

[Google drive](https://drive.google.com/drive/folders/1-_5qdC_522v3UWVftL4Tygq7IFG8e4nC?usp=drive_link)

## Table of Contents
* Project Structure
* Installation
* Usage
* Components
* Customization Features
* API Integration
* Animations
* State Management
* File Structure
* Configuration
* Contributing
* License

## Project Structure
The project is organized into components, pages, and configuration files. Key components include:

* Canvas: Contains the Three.js scene, including the shirt model and backdrop.
* Customizer: The main customization interface where users can modify shirt properties.
* Home: The landing page introducing the customization app.
* AIPicker, ColorPicker, FilePicker: Components for handling AI image generation, color picking, and file uploads.
* Tabs and Buttons: Reusable UI components for buttons and tabs.
* Store: Valtio-based state management.

## Installation
To run the app locally, follow these steps:

1. Clone the repository:

```
git clone <repository-url>
```

2. Install dependencies:

```
cd <project-folder>
npm install
```

3. Start the development server:

```
npm start
```
The app will be available at http://localhost:3000.

## Usage
* Open the app in your web browser.
* Explore the customization features on the Customizer page.
* Click on "Customize It" on the Home page to access the customization interface.
* Customize the shirt color, texture, and design using the available tools.
* Explore the 3D model and download the customized shirt.

## Components
### AIPicker
The AIPicker component handles AI image generation. It includes a textarea for entering prompts and buttons for generating AI-generated logos and full textures.

### ColorPicker
The ColorPicker component provides a color picker interface using the SketchPicker from the `react-color` library. Users can select a color to apply to the shirt.

### FilePicker
FilePicker allows users to upload image files and choose between logo and full textures for the shirt.

### CustomButton
A customizable button component that adapts its style based on the specified type (filled or outline).

### Tab
A tab component used in the Customizer for switching between color picking, file uploading, and AI image generation.

## Customization Features 
- **Color Picker:** Users can choose a custom color for the shirt.
- **File Upload:** Upload images to be used as logos or full textures on the shirt.
- **AI Image Generation:** Generate images using an AI model by providing prompts.
- **Filter Tabs:** Switch between different filter options like logo texture, full texture, and download functionality.

## API Integration
The app integrates with an AI image generation API to create images based on user prompts. The API endpoint is defined in the `config.js` file.

## Animations
The app uses Framer Motion for animations. Key animations include sliding, fading, and spring-based animations on different components. Animations are defined in the motion folder.

## State Management
Valtio is used for state management. The global state is defined in the store.js file and is accessed using useSnapshot in various components.

## File Structure
* assets: Contains images and icons used in the app.
* components: Reusable React components.
* config: Configuration files, including API URLs and motion animations.
* pages: React components representing different pages of the app.
* store: State management using Valtio.
* styles: Stylesheets for styling the components.
* utils: Utility functions used in the app.

## Configuration
The `config.js` file contains configuration settings for the project, such as API URLs for AI image generation. Update this file if the API endpoint changes.

## Contributing
If you'd like to contribute to the project, please follow the guidelines in CONTRIBUTING.md.

## License
This project is licensed under the MIT License.
