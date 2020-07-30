import express from 'express';
import cors from 'cors';
import routes from "./routes"; 
import dotenv from 'dotenv'

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

dotenv.config()
app.listen(process.env.PORT || 3333)