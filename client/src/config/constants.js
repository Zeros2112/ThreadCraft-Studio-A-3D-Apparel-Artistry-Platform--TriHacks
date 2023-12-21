// Importing icon assets for various tabs
import { swatch, fileIcon, ai, logoShirt, stylishShirt, download } from "../assets";

// Definition of tabs in the editor
export const EditorTabs = [
  {
    // Name identifier for the color picker tab
    name: "colorpicker",
    // Icon representing the color picker tab
    icon: swatch,
  },
  {
    // Name identifier for the file picker tab
    name: "filepicker",
    // Icon representing the file picker tab
    icon: fileIcon,
  },
  {
    // Name identifier for the AI picker tab
    name: "aipicker",
    // Icon representing the AI picker tab
    icon: ai,
  },
];

// Definition of tabs for filtering in the editor
export const FilterTabs = [
  {
    // Name identifier for the logo shirt filter tab
    name: "logoShirt",
    // Icon representing the logo shirt filter tab
    icon: logoShirt,
  },
  {
    // Name identifier for the stylish shirt filter tab
    name: "stylishShirt",
    // Icon representing the stylish shirt filter tab
    icon: stylishShirt,
  },
  {
    // Name identifier for the download filter tab
    name: "download",
    // Icon representing the download filter tab
    icon: download,
  },
];

// Definition of decal types with associated properties
export const DecalTypes = {
  // Logo decal type configuration
  logo: {
    // State property in the application state for managing logo decals
    stateProperty: "logoDecal",
    // Filter tab associated with logo decals
    filterTab: "logoShirt",
  },
  // Full decal type configuration
  full: {
    // State property in the application state for managing full decals
    stateProperty: "fullDecal",
    // Filter tab associated with full decals
    filterTab: "stylishShirt",
  },
  // Download decal type configuration
  download: {
    // State property in the application state for managing download-related data
    stateProperty: "download",
    // Filter tab associated with download-related data
    filterTab: "download",
  },
};
