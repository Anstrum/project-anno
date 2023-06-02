import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();


app.use(express.static(__dirname + '/src/static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/static/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});