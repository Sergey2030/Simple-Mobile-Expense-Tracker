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

import { ref, watch } from "vue"
export default {

    setup(){
        const transaction = ref(JSON.parse(localStorage.getItem("transaction")) || [])

        const updateTransactions = () => {
            transaction.value = JSON.parse(localStorage.getItem("transactions")) || []
        }


        watch(() => localStorage.getItem("transactions"), () => {
            updateTransactions()
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