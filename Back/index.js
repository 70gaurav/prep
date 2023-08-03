import express from "express";
import cors from "cors"; // Import the cors middleware
import Connection from "./model/index.js";
import User from "./model/schema.js";

const app = express();

app.use(express.json());
app.use(cors()); // Add the cors middleware to allow cross-origin requests

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/post", async (req, res) => {
  const { name, mail, number } = req.body;
  try {
    const user = new User({ name, mail, phone: number });
    await user.save();
    console.log("Data saved:", user);
    res.send("data submitted");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("Error occurred while saving data.");
  }
});

Connection.then(() => {
  app.listen(3000, () => {
    console.log("server started");
  });
});
