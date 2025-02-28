import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categoryArr: []
    }),
    actions: {
        async fetchAllCategory() {
            try {
                const response = await fetch('http://localhost:5000/api/category',{
                    method: "GET",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    credentials: 'include'
                })
                if(!response.ok){
                    console.log("не")
                    return
                }
                this.categoryArr = await response.json()
            } catch (error) {
                console.error(error)
            }
        },
        async fetchNewCategry(category, imageCategory){
            try {
                const response = await fetch('http://localhost:5000/api/category',{
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    // credentials: 'include',
                    body: JSON.stringify({name: category, image: imageCategory})
                })

                await this.fetchAllCategory()
            } catch (error) {
                console.error(error)
            }
        }
    }
})