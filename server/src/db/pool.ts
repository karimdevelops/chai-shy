import "dotenv/config"
import { Pool } from "pg"

function poolConfig() {
    return new Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB,
    })
}

const pool = poolConfig();

async function verifyConnection(): Promise<void> {
    try {
        const client = await pool.connect();
        console.log("Connected to db successfully.");
        client.release();
    } catch (err) {
        console.log(`Error occurred connecting to db: ${err}`)
    }
}

verifyConnection();

export default pool;