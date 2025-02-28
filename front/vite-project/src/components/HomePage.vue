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
import { onMounted, ref, watch } from "vue"

import { storeToRefs } from 'pinia';
import { useTransactionStore } from '../store/transactionStore';
export default {
    setup(){

        const transactionStore = useTransactionStore()
        transactionStore.getTransaction();
        const { transaction } = storeToRefs(transactionStore)


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