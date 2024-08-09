import { SearchParams, User } from "@user-search-app/types";
import path from "path";
import fs from "fs/promises";

const dataPath = path.join(__dirname, "../..", "./src/utils", "data.json");

export const performSearch = async (params: SearchParams): Promise<User[]> => {
  const data = await fs.readFile(dataPath, "utf-8");
  const users: User[] = JSON.parse(data);

  return users.filter((user) => {
    if (params?.email && !user.email.includes(params.email)) {
      return false;
    }
    if (params?.number && !user.number.includes(params.number)) {
      return false;
    }
    return true;
  });
};
