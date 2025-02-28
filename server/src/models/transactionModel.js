const pool = require('../config/db');

const Transaction = {
    getAll: async () => {
        const { rows } = await pool.query(
            'SELECT * FROM transactions ORDER BY date DESC'
        )
        return rows
    },

    add: async ({ date, money, category }) => {
        const { rows } = pool.query(
            'INSERT INTO transactions (date, money, category) VALUES ($1, $2, $3) RETURNING *',
            [date, money, category]
        )
        return rows
    }
}

module.exports = Transaction;