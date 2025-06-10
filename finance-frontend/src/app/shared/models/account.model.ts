export interface Account {
  account_id: number;
  limit: number;
  products: string[];
  error?: { errorCode: string; message: string };
}