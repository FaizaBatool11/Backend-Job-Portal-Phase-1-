import configDotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import jobRouter from './src/routes/jobRoutes.js';
import router from './src/routes/userRoutes.js';
import cors from 'cors';
import applyRouter from './src/routes/applyRoutes.js';
configDotenv.config()
const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json()); //ya bhi aik buildin middleware ha, data json ka format ma pass ho raha ha

// app.use((req , res , next) =>{
//   console.log("This is middleware");
//   next()
// })
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB Connected Successfully');
})
.catch((err) => {
  console.error('Connection error:', err);
});

app.use('/', jobRouter);
app.use('/auth', router);
app.use('/',applyRouter);
app.listen(port,() => {
console.log("App is runnig on port",port);
})
