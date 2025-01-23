import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    schema:"./config/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_KzCab6dv3IyA@ep-round-base-a4lhny0m.us-east-1.aws.neon.tech/neondb?sslmode=require'
    },
    verbose: true,
    strict: true,
})