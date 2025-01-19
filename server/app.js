const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");
const Expense = require("./models/expense");
const { createServer } = require("http");
const { Server } = require("socket.io");

const database = require("./database/db");
const userRoutes = require("./routes/user");
const expenseRoutes = require("./routes/expense");
const resetRoutes = require("./routes/resest-password");
const chatRoutes = require("./routes/chat");

const app = express();
const PORT = process.env.PORT_NUMBER;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors({ origin: "http://localhost:3000" }));

app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/expense", expenseRoutes);
app.use("/user", resetRoutes);
app.use("/chat", chatRoutes);

User.hasMany(Expense);
Expense.belongsTo(User);

database
  .sync()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log(err);
  });

io.on("connection", (socket) => {
  // console.log('user is connected')
  socket.on("chat-message", (message) => {
    io.emit("chat-message", message);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
