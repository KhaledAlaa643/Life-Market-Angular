export interface Notification {
  isRead: boolean;
  id: number;
  user_id: number;
  type: string;
  notifiable_type: string;
  notifiable_id: number;
  data: string[];
  read_at: Date;
  created_at: Date;
  updated_at: Date;
}
