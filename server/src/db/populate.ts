import "dotenv/config"
import { Client } from "pg"

const SQL = `
CREATE TABLE IF NOT EXISTS menu_category (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(50)
);

INSERT INTO menu_category (name)
VALUES
    ('Drinks'),
    ('Special'),
    ('Wraps'),
    ('Kids'),
    ('Sweets');

CREATE TABLE IF NOT EXISTS menu (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category_id INTEGER REFERENCES menu_category (id),
    name VARCHAR(50),
    price DECIMAL,
    description VARCHAR(255)
);
`

async function main() {
    console.log("Seeding...");
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("Successfully created tables!");
}

main();