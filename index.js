import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

//  newest version of node, we can use import syntax instead of regular syntax


const app = express();

app.use(bodyParser.json({ limit: "30 mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30 mb", extended: true }));
app.use(cors());


// database we will be using is mongoDB's cloud atlas
// https://www.mongodb.com/cloud/atlas

const CONNECTION_URL = 'mongodb+srv://svgeorge029_db_user:ProjectMaking349@cluster0.yjvlvfo.mongodb.net/'
  //before deployment we will store our password and username safely

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));