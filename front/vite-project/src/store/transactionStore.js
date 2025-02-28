import { defineStore } from 'pinia';

export const useTransactionStore = defineStore('transaction', {
    state: () => ({
        transaction: []
    }),
    actions: {
        async getTransaction() {
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
        
                this.transaction = await response.json()
                
            } catch (error) {
                console.error("Ошибка запроса:", error);
            }
        },
        async addTransaction(dateTransaction, moneyTransaction, categoryTransaction){
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
        
                await this.getTransaction();
            } catch (error) {
                console.error("Ошибка запроса:", error);
            }
        }
    }
})
