// income

export const getIncomeTransaction = async () => {
    try {
        const response = fetch("http://localhost:5000/api/income",{
            method: "GET"
        })

        if(!response.ok) return console.log("не")

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const addIncomeTransaction = async (categoryIncome, dateIncome, moneyIncome) => {
    try {
        const response = fetch("http://localhost:5000/api/income",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                // credentials: 'include',
                body: JSON.stringify({category: categoryIncome, date: dateIncome, money: moneyIncome})
        })

        if(!response.ok) return console.log("не")

    } catch (error) {
        console.error(error)
    }
}