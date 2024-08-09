import { SearchParams, SearchResponse } from "@user-search-app/types";
import axios from "axios";

export const searchUsers = async (params: SearchParams, signal: AbortSignal): Promise<SearchResponse> => {
  const api = import.meta.env.VITE_API_BASE_URL + "/search";
  const res = await axios.post<SearchResponse>(api, params, { signal });

  return res.data;
};
