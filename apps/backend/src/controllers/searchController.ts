import { SearchParams, SearchResponse } from "@user-search-app/types";
import { Request, Response } from "express";
import { delay } from "../utils/delay";
import { performSearch } from "../services/searchService";

export const searchUsers = async (req: Request, res: Response) => {
  try {
    const searchParams: SearchParams = req.body;
    await delay(5000);

    const results = await performSearch(searchParams);
    const response: SearchResponse = { results };

    res.json(response);
  } catch (err) {
    console.error("Error in searchUsers:", err);
    res
      .status(500)
      .json({ error: "An error occurred while searching for users" });
  }
};
