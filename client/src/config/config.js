// Configuration object containing backend URLs for different environments
const config = {
  // Development environment configuration
  development: {
    // URL for the backend in the development environment
    backendUrl: "http://localhost:8080/api/v1/diffusion",
  },
  
  // Production environment configuration
  production: {
    // URL for the backend in the production environment
    backendUrl: "https://devswag.onrender.com/api/v1/dalle",
  },
};

// Export the configuration object for use in other parts of the application
export default config;
