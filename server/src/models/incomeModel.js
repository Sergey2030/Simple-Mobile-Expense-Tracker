
const pool = require("../config/db.js")

const Income = {
    getAll: async () => {
        const { rows } = await pool.query('SELECT * FROM income ORDER BY date DESC');
        return rows;
    },

    create: async (category, date, money) => {
        const { rows } = await pool.query(
            'INSERT INTO income (category, date, money) VALUES ($1, $2, $3) RETURNING *',
            [category, date, money]
        );
        return rows[0];
    },
};

module.exports = Income;

