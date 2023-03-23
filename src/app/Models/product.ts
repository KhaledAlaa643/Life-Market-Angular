export interface Product {
    id? :string | undefined,
    name:string,
    description:string,
    price_before_discount:number,
    price:number,
    beand:string,
    quantity:number,
    photo:string,
    prd_rating:number,
    selling_count:number,
    createdAt?:Date,
    updatedAt?:Date,
    sub_cat_id:string,
    user_id:string
}
