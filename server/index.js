// import express from 'express';
// import * as dotenv from 'dotenv';
// import cors from 'cors';

// import dalleRoutes from './routes/dalle.routes.js';

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json({ limit: "50mb" }))

// app.use("/api/v1/dalle", dalleRoutes);

// app.get('/', (req, res) => {
//   res.status(200).json({ message: "Hello from DALL.E" })
// })

// app.listen(8080, () => console.log('Server has started on port 8080'))





import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import request from 'request';
import diffusionRoutes from './routes/diffusion.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Import the modified diffusionRoutes
app.use("/api/v1/diffusion", diffusionRoutes);

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from Diffusion" });
});

app.listen(8080, () => console.log('Server has started on port 8080'));




