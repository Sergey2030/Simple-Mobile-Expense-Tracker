<template>
    <div class="totalBalanceWrapper">
        <div class="totalBalanceCont">
            <div class="balanceInfo">
                <div class="totalBalance" @click="totalBalanceModal">
                    <p>Total Balance</p>
                    <span>${{ balance }}</span>
                </div>
                <div class="incomeExpenceCont">
                    <div class="income" @click="incomeModal">
                        <img src="../../public/income.png" alt="">
                        <p>Income</p>
                        <span>${{ incomeMoney }}</span>
                    </div>
                    <div @click="expenceModal" class="expence">
                        <img src="../../public/expence.png" alt="">
                        <p>Expence</p>
                        <span>-${{ expenceMoney }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="modalWindow" v-bind:class="{ 'show': showModal }">
            <div class="modalInfo">
                <h3>Добавь</h3>
                <input type="text" v-model="moneyUser" placeholder="$" required>
                <button @click="addMoney">Созранить</button>
                <p @click="closeWindow">x</p>
            </div>
        </div>
        <div class="expenceModalCont" v-bind:class="{ 'show': showModalExpence }">
            <div class="expenceModal" >
                <p>Менеджер транзацкий</p>
                <span>минус</span>
                <form>
                    <div>
                        <p>Выберите категорию</p>
                        <select v-model="categoryTransactionExpence" name="" id="" required>
                            <option :value="category.name" v-for="category in categoryArr" :key= "category.id">
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <p>Введите сумму</p>
                        <input v-model="sumTransactionExpence" type="number" placeholder="Сумма" required>
                    </div>
                    <div>
                        <p>Укажите дату</p>
                        <input type="date" v-model="dateTransactionExpence" required>
                    </div>

                    <button @click.prevent="ExpenceTransaction">Добавить</button>
                </form>
                <p @click="closeModalExpence" class="closeModalExpence">x</p>
            </div>
        </div>
            
        <div class="incomeModal" v-bind:class="{ 'show': showModalIncome }">
            <div class="incomeModalCont">
                <p>Менеджер транзацкий</p>
                <span>Пополнение</span>

                <form>
                    <div>
                        <p>Категория</p>
                        <input v-model="categoryTransactionIncome" type="text" placeholder="Категоря" required>
                    </div>
                    <div>
                        <p>Введите сумму</p>
                        <input v-model="sumTransactionIncome" type="number" placeholder="Сумма" required>
                    </div>
                    <div>
                        <p>Укажите дату</p>
                        <input type="date" v-model="dateTransactionIncome" required>
                    </div>
                    
                    <button @click.prevent="incomeTransaction">Добавить</button>
                </form>
                <p @click="closeModalIncome" class="closeModalIncome">x</p>
            </div>
        </div>
    </div>
</template>


<script>
import { onMounted, ref, watch } from "vue"

import { storeToRefs } from 'pinia';

import { useExprenceStore } from "../store/exprenceStore";
import { useIncomeStore } from "../store/incomeStore";
import { useBalanceStore } from "../store/totalBalanceStore";
import { useCategoryStore } from "../store/categoryStore";
import { useTransactionStore } from "../store/transactionStore";
export default {
    setup(props, { emit }){
        const showModal = ref(false)

        const showModalIncome = ref(false)
        const showModalExpence = ref(false)
        const showModalTotal = ref(false)

        const local = ref(props.transactions) 
        console.log(local.value);
        

        const categoryTransactionExpence = ref("")
        const categoryTransactionIncome = ref("")


        const balanceStore = useBalanceStore()
        balanceStore.getBalance();
        const { balance } = storeToRefs(balanceStore)
        console.log(balance);
        

        const transactionStore = useTransactionStore()
        transactionStore.getTransaction();
        const { transaction } = storeToRefs(transactionStore)

        const exprenceStore = useExprenceStore()
        exprenceStore.getExprenceTransaction();
        const { expenceTransactionLocal } = storeToRefs(exprenceStore)
        
        const incomeStore = useIncomeStore()
        // incomeStore.getIncomeTransaction();
        const { incomeTransactionLocal } = storeToRefs(incomeStore)
        console.log(incomeTransactionLocal);
        

        const moneyUser = ref("")

        const categoryStore = useCategoryStore()
        categoryStore.fetchAllCategory();
        const { categoryArr } = storeToRefs(categoryStore)

        const sumTransactionExpence = ref("")
        const sumTransactionIncome = ref("")

        const dateTransactionExpence = ref("")
        const dateTransactionIncome = ref("")

        const expenceMoney = ref("")

        const incomeMoney = ref("")


        const closeWindow = () => {
            showModal.value = false
        }

        const openEditWindow = () => {
            showModal.value = true
        }

        const expenceModal = () => {
            showModalExpence.value = true
        }

        const closeModalExpence = () => {
            showModalExpence.value = false
        }

        const incomeModal = () => {
            showModalIncome.value = true
        }

        const closeModalIncome = () => {
            showModalIncome.value = false
        }

        const totalBalanceModal = () => {
            showModal.value = true
        }

        

        const addMoney = () => {
            balanceStore.addBalance(moneyUser.value)
            balance.value = moneyUser.value
            moneyUser.value = ""
        }

        const ExpenceTransaction = () => {
            if(!categoryTransactionExpence.value || !sumTransactionExpence.value || !dateTransactionExpence.value){
                return
            }
            else if(sumTransactionExpence.value > balance.value){
                console.log("нет деняк");
                
            }else{
                transactionStore.addTransaction(dateTransactionExpence.value, sumTransactionExpence.value ,categoryTransactionExpence.value)

                if (!Array.isArray(expenceTransactionLocal.value)) {
                    expenceTransactionLocal.value = [];
                }

                exprenceStore.addExprenceTransaction(categoryTransactionExpence.value, dateTransactionExpence.value, sumTransactionExpence.value)

                balance.value = parseInt(balance.value) - parseInt(sumTransactionExpence.value) 
                balanceStore.addBalance(balance.value)

                categoryTransactionExpence.value = ""
                dateTransactionExpence.value = ""
                sumTransactionExpence.value = ""

                setTimeout(() => {
                    expenceMoneyFunc()
                }, 200)

                closeModalExpence()
            }
        }

        const incomeMoneyFunc = () => {
            console.log(incomeTransactionLocal.value);
            
            if (Array.isArray(incomeTransactionLocal.value)) {
                const totalMoney = incomeTransactionLocal.value.reduce((acc, transaction) => {
                    return acc + parseFloat(transaction.money)
                }, 0);

                incomeMoney.value = totalMoney;
            } else {
                incomeMoney.value = 0
            }
        };

        const incomeTransaction = () => {
            if(!categoryTransactionIncome.value || !sumTransactionIncome.value || !dateTransactionIncome.value){
                return
            }else{
                transactionStore.addTransaction(dateTransactionIncome.value, sumTransactionIncome.value, categoryTransactionIncome.value)


                if (!Array.isArray(incomeTransactionLocal.value)) {
                    incomeTransactionLocal.value = [];
                }

                incomeStore.addIncomeTransaction(categoryTransactionIncome.value, dateTransactionIncome.value, sumTransactionIncome.value)

                balance.value = parseInt(balance.value) + parseInt(sumTransactionIncome.value) 
                console.log(balance);
                
                balanceStore.addBalance(balance.value)
                
                setTimeout(() => {
                    incomeMoneyFunc()
                }, 200)

                categoryTransactionIncome.value = ""
                dateTransactionIncome.value = ""
                sumTransactionIncome.value = ""
                
                closeModalIncome()
            }
        }

        const expenceMoneyFunc = () => {
            if (Array.isArray(expenceTransactionLocal.value)) {
                const totalMoney = expenceTransactionLocal.value.reduce((acc, transaction) => {
                    return acc + parseFloat(transaction.money)
                }, 0);

                expenceMoney.value = totalMoney;
            } else {
                expenceMoney.value = 0
            }
        };

        onMounted(async () => {
            await incomeStore.getIncomeTransaction()
            expenceMoneyFunc()
            incomeMoneyFunc()
        })

        return{
            showModal, closeWindow, openEditWindow, moneyUser, addMoney, balance, 
            categoryTransactionExpence, categoryArr, sumTransactionExpence, dateTransactionExpence,
            ExpenceTransaction, expenceMoney, incomeMoney, incomeTransaction, categoryTransactionIncome, sumTransactionIncome, dateTransactionIncome,
            showModalIncome, showModalExpence, expenceModal, showModalTotal, incomeModal, totalBalanceModal, closeModalIncome, closeModalExpence

        }
    },
    props: {
        transactions: { 
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
.totalBalanceWrapper{
    height: 290px;
}
.totalBalanceCont{
    height: 250px;
}

.modalWindow {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
}

.modalWindow.show {
    display: flex;
    opacity: 1;
}

.modalInfo{
    position: relative;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px;
    background-color: #F1FFF3;
    border-radius: 20px;
}

.modalInfo p{
    position: absolute;
    top: 0px;
    right: 10px;
    color: #0068FF;
    font-weight: 500;
    font-size: 30px;
}

.modalInfo button{
    padding: 5px 10px;
    background-color: #00D09E;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
}

.modalInfo button:hover{
    background-color: #0da380;
}

.expenceModalCont{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
}


.expenceModal{
    position: relative;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 25px;
    background-color: #F1FFF3;
    border-radius: 20px;
}

.expenceModal .closeModalExpence{
    position: absolute;
    top: 0px;
    right: 10px;
    color: #0068FF;
    font-weight: 500;
    font-size: 30px;
}

.expenceModal button{
    padding: 5px 10px;
    background-color: #00D09E;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
}

.expenceModal button:hover{
    background-color: #0da380;
}

.expenceModalCont.show{
    display: flex;
    opacity: 1;
}

.incomeModal{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
}
/* closeModalExpence */

.incomeModal.show{
    display: flex;
    opacity: 1;
}

.incomeModalCont{
    position: relative;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 25px;
    background-color: #F1FFF3;
    border-radius: 20px;
}

.incomeModal .closeModalIncome{
    position: absolute;
    top: 0px;
    right: 10px;
    color: #0068FF;
    font-weight: 500;
    font-size: 30px;
}

.incomeModal button{
    padding: 5px 10px;
    background-color: #00D09E;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px;
}

.incomeModal button:hover{
    background-color: #0da380;
}

.modalInfo.show{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    background-color: #fff;
}

.totalBalanceCont{
    padding: 30px 20px;
}

.balanceInfo{
    height: 237px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    flex-direction: column;
}

.incomeExpenceCont{
    width: 100%;
    height: 40%;
    display: flex;
    align-content: center;
    justify-content: space-between;
}

.income, .expence{
    height: 100%;
    width: 47%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px;
    border-radius: 14px;
    background-color: #F1FFF3;
}

.income, .expence p, span{
    color: #093030;
}

.income p{
    font-weight: 500;
    font-size: 15px;
}

.income span{
    font-weight: 600;
    font-size: 20px;
}

.expence span{
    color: #0068FF;
    font-weight: 600;
    font-size: 20px;
}

.expence p{
    font-weight: 500;
    font-size: 15px;
}

.totalBalance{
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 35%;
    border-radius: 14px;
    background-color: #F1FFF3;
}

.totalBalance p, span{
    color: #093030;
}

.totalBalance p{
    font-weight: 500;
    font-size: 15px;
}

.totalBalance span{
    font-weight: bold;
    font-size: 24px;
}

</style>