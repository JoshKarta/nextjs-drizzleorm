import type { Config } from "drizzle-kit";
 
export default {
  schema: "./app/db/schema.ts",
  out: "./app/db/drizzle",
  driver:"mysql2",
  dbCredentials:{
    connectionString: 'mysql://b1wes6aol8eaaglvuyxp:pscale_pw_3qkCBqfrj9EbAcz2ZSgHg8vA2OA9xNT2PYyLh2d05PT@aws.connect.psdb.cloud/ecommerce-admin?ssl={"rejectUnauthorized":true}'
  }
} satisfies Config;