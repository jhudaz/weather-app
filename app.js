require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;

// Mongodb connection 
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .catch(error => handleError(error));


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Middleware Vue.js router history mode
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});