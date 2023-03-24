export interface Order {
        products: any;
        id: number;
        created_at: string;
        updated_at: string;
        user_id: number;
        status?: string;
        total?: number;
        delivery_price_id?: number;
      }
      

