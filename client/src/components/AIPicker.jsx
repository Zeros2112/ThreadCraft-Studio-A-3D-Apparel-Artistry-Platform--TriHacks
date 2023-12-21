import React from "react";

import CustomButton from "./CustomButton";

// AIPicker component for interacting with AI and handling prompts
const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      {/* Textarea for entering AI prompts */}
      <textarea
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />

      {/* Container for buttons, with a conditional rendering based on whether AI is generating an image */}
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          // Display a button with a message when AI is generating an image
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          // Display two buttons for triggering AI logo and AI full image generation
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
