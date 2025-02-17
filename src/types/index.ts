export interface UserData {
  wallet: string;
  baseline_balance: number;
  current_balance: number;
  last_update: string;
}

export interface UsersData {
  [key: string]: UserData;
} 