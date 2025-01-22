export interface ForexData {
  date: string;
  session: string;
  open_price: number;
  close_price: number;
  high_price: number;
  low_price: number;
  changes: number;
  remark: string;
  hourly_timing: string;
}
