export interface Cart {
    id?:string,
    quantity:number,
    price:number,
    createdAt?:Date,
    updatedAt?:Date,
    user_id?:string,
    prd_id:string
}
