import "dotenv/config";
import { Pool } from "pg";

function poolConfig() {
  if (process.env.PROD == "true") {
    return new Pool({
      connectionString: process.env.DB_STRING,
    });
  } else {
    return new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
    });
  }
}

const pool = poolConfig();

async function verifyConnection(): Promise<void> {
  try {
    const client = await pool.connect();
    console.log("Connected to db successfully.");
    client.release();
  } catch (err) {
    console.log(`Error occurred connecting to db: ${err}`);
  }
}

verifyConnection();

export default pool;
