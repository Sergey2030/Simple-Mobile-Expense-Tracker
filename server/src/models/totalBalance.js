const pool = require("../config/db")

const TotalBalance = {
    getBalance: async () => {
        const { rows } = await pool.query("SELECT * FROM totalBalance LIMIT 1")
        return rows[0] || null
    },

    updateBalance: async (money) => {
        const existingBalance = await TotalBalance.getBalance();
        if (existingBalance) {
            await pool.query("UPDATE totalBalance SET money = $1 WHERE id = $2", [money, existingBalance.id])
        } else {
            await pool.query("INSERT INTO totalBalance (money) VALUES ($1)", [money])
        }
    },
}

module.exports = TotalBalance;
