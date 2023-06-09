import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helloRoutes from 'routes/hello.routes';
import cors from 'cors';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors);
app.use(express.json());
app.use(morgan('📥 [server]: :method :status :url :res[content-length] - :response-time ms'));

app.use('/hello', helloRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
