import pg from "pg";
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

const pool = new pg.Pool({
  connectionString: process.env.DB_URL as string,
});
const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;

export default db;
