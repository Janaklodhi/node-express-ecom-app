const { red } = require('colors');
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send({
        messages: "Welcome to the Express server!"
    });
});

app.post("users", (req, res)=>{
    const [name, email, password] = req.body 
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});