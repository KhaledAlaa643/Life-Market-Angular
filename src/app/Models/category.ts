export interface Category {
    id?:string,
    name:string,
    description:string,
    photo:string,
    created_at?:Date,
    updated_at?:Date
}

export interface SubCategory {
    id?:string,
    name:string,
    description:string,
    created_at?:Date,
    updated_at?:Date,
    cat_id:string
}
