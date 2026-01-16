import pool from "./pool.ts";

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
