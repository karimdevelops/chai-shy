import pool from "./pool.ts";
import type { IUser } from "../types/user.ts";

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

export async function addToCart(user_id: number, menu_id: number) {
    const { rows } = await pool.query(`
        INSERT INTO 
        cart (user_id, menu_id)
        VALUES ($1, $2)
        ;
        `, [user_id, menu_id])
    return rows;
}