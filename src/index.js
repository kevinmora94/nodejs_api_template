import express from 'express';
import cors from 'cors';
import { getEnvironmentPort } from './server/env';

// api imports
import * as apiTests from './api/testApi';

const app = express();
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

// Endpoints
app.get('/', apiTests.testApi);

const port = getEnvironmentPort();
app.listen(port, () => console.log(`Server running on port: ${port}`));
