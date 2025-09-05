import express from 'express';
import { createJobApplication } from '../controller/applyController.js';
const app = express.Router();
app.post('/applyJob', createJobApplication);
const applyRouter = app;
export default applyRouter;