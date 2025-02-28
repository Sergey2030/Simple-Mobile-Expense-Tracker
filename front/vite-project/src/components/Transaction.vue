<template>
    <div>
        <header>
            <div class="head">
                <p>Транзакции</p>
            </div>
            <total-balance-vue :transactions ="transaction"/>
            <div class="components">

                <transaction-component-vue :transactions ="transaction"/>
            </div>
        </header>
    </div>
</template>


<script>
import TotalBalanceVue from './TotalBalance.vue'
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