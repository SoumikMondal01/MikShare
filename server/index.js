import express from 'express'
import router from './routes/routes.js';
import cors from 'cors'
import DbConnections from './database/db.js';

const app= express();

app.use(cors());
app.use('/', router);

const PORT= 8000;

DbConnections();

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})