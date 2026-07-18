// Morgan ek middleware hai jo Express.js mein HTTP request logs print karta hai.
// Isse tumhe pata chalta hai ki kaunse route hit hua, status code kya tha aur response time kitna tha.
// Development mein debugging aur monitoring ke liye bahut useful hai.

const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev")); // request log karega

app.get("/", (req, res) => res.send("Hello Sadik!"));

app.listen(3000, () => {
    console.log(`Server is running http://localhost:3000`);
});
