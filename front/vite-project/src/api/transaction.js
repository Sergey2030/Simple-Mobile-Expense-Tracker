export const getTransaction = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/transactions/",{
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            },
        })

        if(!response.ok){
            console.log("не")
            return
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error("Ошибка запроса:", error);
    }
}

export const addTransaction = async (dateTransaction, moneyTransaction, categoryTransaction) => {
    try {
        const response = await fetch("http://localhost:5000/api/transactions/",{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({date: dateTransaction, money: moneyTransaction, category: categoryTransaction})
        })

        if(!response.ok){
            console.log("не")
            return
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error("Ошибка запроса:", error);
    }
}