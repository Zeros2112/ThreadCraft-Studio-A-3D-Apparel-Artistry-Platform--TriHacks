import express from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const imageBuffer = await query({ "inputs": prompt });
    
    // Convert the buffer to a base64-encoded string
    const imageBase64 = imageBuffer.toString('base64');

    res.status(200).json({ photo: imageBase64 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

async function query(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: { Authorization: "Bearer hf_***YOUR_HUGGINGFACE_API_KEY***" },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result = await response.buffer(); // Use buffer instead of blob

  return result;
}

export default router;
