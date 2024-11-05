require('dotenv').config();

const development = {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};

const production = {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    pool: {
        max: 30,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
};

module.exports = { development, production };
