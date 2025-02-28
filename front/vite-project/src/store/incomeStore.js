import { defineStore } from 'pinia';

export const useIncomeStore = defineStore('income', {
    state: () => ({
        incomeTransactionLocal: []
    }),
    actions: {
        async getIncomeTransaction() {
            try {
                const response = await fetch("http://localhost:5000/api/income",{
                    method: "GET",
                    "Content-Type": "application/json"
                })
        
                if(!response.ok) {
                    throw new Error(`Ошибка`);
                }
        
                const data = await response.json()
                this.incomeTransactionLocal = data
                console.log(this.incomeTransactionLocal);
                
                
            } catch (error) {
                console.error(error)
            }
        },
        async addIncomeTransaction(categoryIncome, dateIncome, moneyIncome){
            try {
                const response = await fetch("http://localhost:5000/api/income",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                        },
                        // credentials: 'include',
                        body: JSON.stringify({category: categoryIncome, date: dateIncome, money: moneyIncome})
                })
        
                if(!response.ok) return console.log("не")
        
                await this.getIncomeTransaction()
            } catch (error) {
                console.error(error)
            }
        }
    }
})