export interface CustomError extends Error {
  type?: string;
  username?: string;
}
