import express from "express";
import { searchUsers } from "../controllers/searchController";

const router = express.Router();

router.post("/search", searchUsers);

export default router;
