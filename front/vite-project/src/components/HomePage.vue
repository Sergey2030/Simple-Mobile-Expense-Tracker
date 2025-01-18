<template>
    <div class="be">
        <header>
            <div class="head">
                <p>Главная страница</p>
            </div>
        </header>
        <total-balance :transactions="transaction" />
        <div class="components">
            <total-consumption :transactions="transaction"/>
            <transaction-component-vue :transactions="transaction"/>

        </div>
    </div>
</template>


<script>
import TotalBalance from "./TotalBalance.vue"
import TotalConsumption from "./TotalConsumption.vue"
import TransactionComponentVue from './TransactionComponent.vue'
import { ref, watch } from "vue"
export default {
    setup(){
        const transaction = ref(JSON.parse(localStorage.getItem("transaction")) || [])
        console.log(transaction.value);
        
        const updateTransactions = () => {
            transaction.value = JSON.parse(localStorage.getItem("transaction")) || []
        }


        watch(() => localStorage.getItem("transaction"), () => {
            updateTransactions()
        })

        return{
            transaction
        }
    },
    components: {
        TotalBalance,
        TotalConsumption,
        TransactionComponentVue
    },

}
</script>


<style scoped>

.be{
    height: 100%;
}


</style>