<template>
    <div>
        <div class="transactionCont"  v-for="transaction in transactions" :key = "transaction.id">
            <p> {{ transaction.category }} </p>
            <div class="dateCont">
                <span>{{ transaction.date }}</span>
            </div>
            <span>${{ transaction.money }}</span>
        </div>
    </div>
</template>


<script>
import { ref } from "vue"

export default {
   
    setup(props) {
        const transactions = props.transactions


        return{
            transactions
        }
    },
    props:{
          transactions: {
            type: Array,
            required: true
        }
    }
}

</script>


<style scoped>
.transactionCont{
    height: 50px;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #00D09E;
}

.transactionCont p{
    width: 60px;
    color: #052224;
    font-size: 15px;
    font-weight: 500;
}

.dateCont{
    width: 120px;
    padding: 0 20px;
    border-left: 1px solid #00D09E;
    border-right: 1px solid #00D09E;
}

.dateCont span {
    
    font-weight: 400;
    font-size: 13px;
}

.transactionCont > span{
    width: 60px;
    font-weight: 400;
    font-size: 15px;
    color: #0068FF;
}
</style>