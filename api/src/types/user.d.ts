export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    is_admin: boolean,
    is_staff: boolean
}

export interface Product {
    product_id: number,
    quantity: number
}

export interface Products {
    user_id: number,
    menu_id: number,
    quantity: number
}