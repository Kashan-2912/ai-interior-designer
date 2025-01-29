import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_O9KmbETzv8ri@ep-mute-recipe-a8ygutgh.eastus2.azure.neon.tech/neondb?sslmode=require'
  },
});