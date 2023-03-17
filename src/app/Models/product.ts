export interface Product {
    id?:string,
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

export interface Product_Photo {
    id?:string,
    path:string,
    createdAt?:Date,
    updatedAt?:Date,
    prd_id:string,
}


export interface Product_Rating {
    id?:string,
    review:string,
    star:number,
    created_at?:Date,
    updatedAt?:Date,
    prd_id:string,
}
