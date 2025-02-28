import { defineStore } from 'pinia';

export const useBalanceStore = defineStore('balance', {
    state: () => ({
        balance: []
    }),
    actions: {
        async getBalance() {
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
                this.balance = data.money
            } catch (error) {
                console.error(error)
            }
        },
        async addBalance(moneyBalance){
            console.log(moneyBalance);
            
            try {
                const response = await fetch('http://localhost:5000/api/balance',{
                    method: "PUT",
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
    }
})