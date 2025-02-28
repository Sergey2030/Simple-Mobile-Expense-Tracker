// import pool from '../config/db.js';
const pool = require("../config/db.js")

const Experience = {
    getAll: async () => {
        const { rows } = await pool.query('SELECT * FROM experience ORDER BY date DESC');
        return rows;
    },

    create: async (category, date, money) => {
        const { rows } = await pool.query(
            'INSERT INTO experience (category, date, money) VALUES ($1, $2, $3) RETURNING *',
            [category, date, money]
        );
        return rows[0];
    },
};

module.exports = Experience;
