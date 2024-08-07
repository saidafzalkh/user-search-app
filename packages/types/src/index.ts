export interface User {
  email: string;
  number: string;
}

export interface SearchParams {
  email: string;
  number?: string;
}

export interface SearchResponse {
  results: User[];
}
