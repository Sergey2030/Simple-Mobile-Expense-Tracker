export const getBalance = async () =>{
    try {
        const response = await fetch('http://localhost:5000/api/balance',{
            method: "GET",
            headers: {
            "Content-Type": "application/json"
            },
            // credentials: 'include'
        })
        if(!response.ok){
            console.log("не")
            return
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const addBalance = async (moneyBalance) =>{
    try {
        const response = await fetch('http://localhost:5000/api/balance',{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            // credentials: 'include',
            body: JSON.stringify({money: moneyBalance,})
        })
    } catch (error) {
        console.error(error)
    }
}