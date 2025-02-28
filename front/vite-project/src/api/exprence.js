// exprence 

export const getExprenceTransaction = async () => {
    try {
        const response = fetch("http://localhost:5000/api/exprence",{
            method: "GET"
        })

        if(!response.ok) return console.log("не")

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const addExprenceTransaction = async (categoryExprence, dateExprence, moneyExprence) => {
    try {
        const response = fetch("http://localhost:5000/api/exprence",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
                // credentials: 'include',
                body: JSON.stringify({category: categoryExprence, date: dateExprence, money: moneyExprence})
        })

        if(!response.ok) return console.log("не")

    } catch (error) {
        console.error(error)
    }
}