const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'project_80',
    password: '0000'
})

console.log( `Connecting local PostgreSQL database ${pool.options.database} on port ${pool.options.port}`);

module.exports = pool;