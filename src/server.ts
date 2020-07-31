const PORT = 3333;

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello World :)' });
})

app.listen(PORT, () => {
    console.log(`BACKEND is running on port ${PORT}`);
})