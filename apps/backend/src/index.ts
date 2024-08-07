import express from "express";
import cors from "cors";
import searchRoute from "./routes/searchRoute";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", searchRoute);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
