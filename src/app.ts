import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
// import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import methodOverride from 'method-override';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './routes/route.routes';

console.log('APP');

dotenv.config();

const app = express();

app.use('/kitchen', Routes);

app.use(morgan('dev'));
// This is the middle ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.json());
// app.use(cookieParser());
app.use(cors());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
  console.log('DB connected');
} ).catch(err => {
  console.log(err);
}
);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

export default app;