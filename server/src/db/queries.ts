import pool from "./pool.ts";

export async function addMenu(
    cat_id: number,
    name: string,
    price: number,
    imageLoc: string,
    desc: string
) {
    const { rows } = await pool.query(`
        INSERT INTO 
        menu (category_id, name, price, imageLocation, description)
        VALUES ($1, $2, $3, $4, $5)
        ;
    `, [cat_id, name, price, imageLoc, desc]);
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
