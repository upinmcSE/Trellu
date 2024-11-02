import express from 'express';

const app = express();

const PORT = 3019;
const hostname = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`);
})
