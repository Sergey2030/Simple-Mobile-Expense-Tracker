import { defineStore } from 'pinia';

export const useExprenceStore = defineStore('exprence', {
    state: () => ({
        expenceTransactionLocal: []
    }),
    actions: {
        async getExprenceTransaction() {
            try {
                const response = await fetch("http://localhost:5000/api/exprence",{
                    method: "GET"
                })
        
                if(!response.ok) return console.log("не")
        
                this.expenceTransactionLocal = await response.json()
            } catch (error) {
                console.error(error)
            }
        },
        async addExprenceTransaction(categoryExprence, dateExprence, moneyExprence){
            try {
                const response = await fetch("http://localhost:5000/api/exprence",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                        },
                        // credentials: 'include',
                        body: JSON.stringify({category: categoryExprence, date: dateExprence, money: moneyExprence})
                })
        
                if(!response.ok) return console.log("не")

                this.expenceTransactionLocal = await response.json()
                console.log(this.expenceTransactionLocal);
                
                await this.getExprenceTransaction()
            } catch (error) {
                console.error(error)
            }
        }
    }
})