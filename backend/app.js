const express = require("express");
const cors = require("cors");

const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


mongoose.connect(
  "mongodb+srv://<db_username>:<db_password>@cluster0.5u94opo.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


const todoRoutes = require("./routes/todos");
app.use("/api/todos", todoRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
