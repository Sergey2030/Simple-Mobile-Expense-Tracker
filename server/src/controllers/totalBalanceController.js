const TotalBalance = require('../models/totalBalance')

exports.getBalance = async (req, res) => {
    try {
        const balance = await TotalBalance.getBalance()
        res.json(balance || { money: 0 })
    } catch (error) {
        res.status(500).json({ message: "Ошибка при получении баланса" })
    }
}

exports.updateBalance = async (req, res) => {
    try {
        const { money } = req.body
        const moneyValue = parseInt(money);
        console.log(moneyValue);
        console.log(typeof(moneyValue));
        
        
        if (moneyValue === undefined) {
            return res.status(400).json({ message: "Сумма обязательна" })
            console.log("und");
            
        }
        await TotalBalance.updateBalance(moneyValue)
        res.json({ message: "Баланс обновлен", moneyValue })
    } catch (error) {
        res.status(500).json({ message: "Ошибка при обновлении баланса" })
        console.log("не");
        
    }
}

