const { Pool } = require('pg');

let pool;

if (process.env.DATABASE === 'SUPABASE') {
    pool = new Pool({
      user: 'postgres',
      host: 'db.nikndtyqolmuexhicjbr.supabase.co',
      port: '5432',
      database: 'postgres',
      password: 'A2ugiojal0419',
    });
    console.log(
      `Connecting SUPABASE PostgreSQL ${pool.options.database} on port ${pool.options.port}`
    );
  } else {
    pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      port: '5433',
      database: 'project_80',
      password: '0000',
    });
  }

console.log( `Connecting local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);

module.exports = pool;