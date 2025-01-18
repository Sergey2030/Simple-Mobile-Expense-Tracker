<template>
    <div>
        <header>
            <div class="head">
                <p>Транзакции</p>
            </div>
            <total-balance-vue :transactions ="transactions"/>
            <div class="components">

                <transaction-component-vue :transactions ="transactions"/>
            </div>
        </header>
    </div>
</template>


<script>
import TotalBalanceVue from './TotalBalance.vue'
import TransactionComponentVue from './TransactionComponent.vue'
import { ref, watch } from "vue"
export default {
    setup(){
        const transactions = ref(JSON.parse(localStorage.getItem("transaction")) || [])

        const updateTransactions = () => {
            transactions.value = JSON.parse(localStorage.getItem("transaction")) || []
        }


        watch(() => localStorage.getItem("transaction"), () => {
            updateTransactions()
        })

        return{
            transactions
        }
    },
    components: {
        TotalBalanceVue,
        TransactionComponentVue
    }
}
</script>


<style scoped>
.components{
    padding-top: 10px;
}
</style>