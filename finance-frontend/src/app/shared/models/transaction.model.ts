export interface Transaction {
  account_id: number;
  transaction_count: number;
  bucket_start_date: string;
  bucket_end_date: string;
  transactions: any[]; // Você pode detalhar melhor conforme o backend
  error?: { errorCode: string; message: string };
}