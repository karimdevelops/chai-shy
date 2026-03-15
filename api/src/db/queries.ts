import pool from "./pool.ts";
import type { IUser } from "../types/user.ts";
import type { Products } from "../types/user.js";

export async function getUser(email: string) {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        const user = rows[0] as IUser | undefined;
        return user;
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

export async function getUserById(id: number) {
    try {
        const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        const user = rows[0] as IUser | undefined;
        return user;
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

export async function createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
) {
    try {
        const { rows } = await pool.query(`
            INSERT INTO
            users (firstName, lastName, email, password) 
            VALUES ($1, $2, $3, $4)
            RETURNING firstName, lastName, email, password`
            , [firstName, lastName, email, password]);
        const user = rows[0] as IUser | undefined;
        return user;
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}

export async function addMenu(
    cat_id: number,
    name: string,
    price: number,
    desc: string
) {
    const { rows } = await pool.query(`
        INSERT INTO 
        menu (category_id, name, price, description)
        VALUES ($1, $2, $3, $4)
        ;
    `, [cat_id, name, price, desc]);
    return rows;
}

export async function getMenu(cat_id: number) {
    const { rows } = await pool.query(`
        SELECT * from menu
        WHERE category_id = ${cat_id}
        ;
    `);
    return rows;
}

export async function getMenuCats() {
    const { rows } = await pool.query(`
        SELECT * from menu_category
        ORDER BY menu_category.id
        ;
    `);
    return rows;
}

export async function addToCart(cartProducts: Products[]) {
    await pool.query(`
        INSERT INTO 
        cart (user_id, menu_id, quantity)
        SELECT user_id, menu_id, quantity 
        FROM jsonb_to_recordset($1::jsonb) 
        AS t (user_id int, menu_id int, quantity int)
        ON CONFLICT (user_id, menu_id)
        DO UPDATE SET
        quantity = EXCLUDED.quantity
        ;
        `, [JSON.stringify(cartProducts)])
}

export async function deleteFromCart(productId: number) {
    await pool.query(
        `DELETE FROM cart WHERE menu_id = $1;`
        , [productId])
}

export async function deleteAllFromCart(userId: number, orderId: number) {
    await pool.query(
        `WITH cart_rows AS (
        DELETE FROM cart WHERE user_id = $1
        RETURNING *
        )
        INSERT INTO 
        order_items (order_id, menu_id, quantity)
        SELECT $2, menu_id, quantity
        FROM cart_rows
        ;`
        , [userId, orderId]);
}

// Command to increase quantity if product already present
// UPDATE SET
//         quantity = cart.quantity + 1 

export async function getCart(userId: number) {
    const { rows } = await pool.query(`
        SELECT cart.id, cart.quantity, menu.id AS product_id, menu.name, menu.price
        FROM cart
        INNER JOIN menu
        ON cart.user_id = ${userId} AND cart.menu_id = menu.id
        ;
    `);
    return rows;
}

export async function addOrder(userId: number) {
    const { rows } = await pool.query(`
        INSERT INTO 
        orders (user_id)
        VALUES ($1)
        RETURNING id
        ;
    `, [userId]);
    return rows;
}

export async function addToOrderItems(userId: number) {

}

