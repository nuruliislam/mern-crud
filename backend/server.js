import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';


const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mern-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/employees', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
