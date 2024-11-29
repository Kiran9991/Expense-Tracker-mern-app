const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const database = require("./database/db");
const userRoutes = require('./routes/user');

let app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',userRoutes)

database.sync().then(() => {
    console.log('Database connected!')
}).catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
