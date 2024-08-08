import express from "express";
import cors from "cors";
import searchRoute from "./routes/searchRoute";
import "dotenv/config";

const app = express();

app.use(cors());

app.use("/api", searchRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
