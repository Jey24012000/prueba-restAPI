const express = require("express");
const action = require("./action")

const app = express();
datos = []

app.get("/", async(req, res) =>{
    await action();

    res.send(datos);
});

app.listen(8000, () => {
    console.log("Port on listen 8000");
})