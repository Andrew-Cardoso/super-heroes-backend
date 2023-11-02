export interface PaginatedResult<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
