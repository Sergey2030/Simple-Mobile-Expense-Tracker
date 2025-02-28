<template>
    <div>
        <header>
            <div class="head">
                <p>Аналитика</p>
            </div>
        </header>
        <total-balance-vue :transactions="transaction"/>
        <div class="components">
            <pizza-analys-vue :transaction="transaction"/>
        </div>
    </div>
</template>


<script>

import PizzaAnalysVue from './PizzaAnalys.vue'
import TotalBalanceVue from './TotalBalance.vue'

import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

import { onMounted, ref, watch } from "vue"
export default {

    setup(){
        const transaction = ref([])

        const transactionFetch = async () => {
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
                transaction.value = data
                console.log(transaction.value);
                
            } catch (error) {
                console.error("Ошибка запроса:", error);
            }
            }

        const updateTransactions = () => {
            transaction.value = JSON.parse(localStorage.getItem("transactions")) || []
        }


        watch(() => localStorage.getItem("transactions"), () => {
            updateTransactions()
        })

        onMounted(() => {
            transactionFetch()
        })

        return{
            transaction
        }
    },
    components: {
        TotalBalanceVue,
        PizzaAnalysVue, 
        Pie
    }    
}
</script>


<style scoped>

</style>