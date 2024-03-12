import sellerRouter from './routes/seller'; 
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json())
app.get('/', (req, res) => res.send('api running 123'));
app.use('/app', sellerRouter);

export { app };