const pool = require('../config/db');

const Category = {
    getAll: async () => {
        const { rows } = await pool.query(
            'SELECT * FROM category ORDER BY id ASC'
        )
        return rows
    },
    create: async (name, image) => {
        console.log(name, image);
        
        const { rows } = await pool.query(
            'INSERT INTO category (name, image) VALUES ($1, $2) RETURNING *',
            [name, image]
        )
        return rows
    }
}

module.exports = Category;