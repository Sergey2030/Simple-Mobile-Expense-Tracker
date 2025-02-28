<template>
    <div>
        <header>
            <div class="head">
                <p>Категории</p>
            </div>
        </header>
        <total-balance-vue :transactions="transaction"/>
        <div class="components">
            <categoris-component-vue :categoryArr="categoryArr" @update-category="updateCategory"/>
        </div>
        <div class="modalWindow" v-bind:class="{ 'show': showModal }">
            <div class="modalInfo">
                <p>Добавьте категорию</p>
                <div>
                    <p>Название</p>
                    <input type="text" placeholder="Name" v-model="nameNewCategory">
                </div>
                <div>
                    <p>Выберите иконку</p>
                    <div class="iconCont">
                        <div class="iconAdd" :class="{'selected': newIcon === icon.img}" v-for="icon in moreIconArr" :key = "icon.id">
                            <img class="icon" @click="clicktoIcon(icon.img)" :src="icon.img" alt="">
                        </div>
                    </div>
                    
                </div>
                <button @click="addCategory">Добавить</button>
                <span @click="closeWindow">x</span>
            </div>
        </div>
    </div>
</template>


<script>
import TotalBalanceVue from './TotalBalance.vue'
import { onMounted, ref, watch } from "vue"
import CategorisComponentVue from './CategorisComponent.vue'

import { storeToRefs } from 'pinia';
import { useCategoryStore } from '../store/categoryStore';

import { useTransactionStore } from '../store/transactionStore';
export default {
    setup(emit){
        
        const showModal = ref(false)

        const categoryStore = useCategoryStore()
        categoryStore.fetchAllCategory();
        const { categoryArr } = storeToRefs(categoryStore)

        const transactionStore = useTransactionStore()
        transactionStore.getTransaction();
        const { transaction } = storeToRefs(transactionStore)

        const moreIconArr = [
            {id: 1, img:"../../giftbox.png"},
            {id: 2, img:"../../medicine.png"},
            {id: 3, img:"../../airplane.png"},
            {id: 4, img:"../../groceries.png"},
            {id: 5, img:"../../house.png"},
            ]

        const newIcon = ref("")

        const clicktoIcon = (icon) => {
            console.log(icon);
            newIcon.value = icon
        }


        const nameNewCategory = ref("")

        const updateCategory = () => {
            showModal.value = true
        }

        const closeWindow = () => {
            showModal.value = false
        }

        const addCategory = () => {

            let category = nameNewCategory.value
            let imageCategory = newIcon.value

            categoryStore.fetchNewCategry(category, imageCategory);

            nameNewCategory.value = ""
            newIcon.value = ""
            showModal.value = false
        }
        // const cateryAdd = [
        //     {id:1, name: "Еда", img:"../../public/foodIcon.png"},
        //     {id:2, name: "Спорт", img:"/public/sportIcon.png"},
        //     {id:3, name: "Транспорт", img:"/transportIcon.png"},
        //     {id:4, name: "Одежда", img:"../../public/clothesIcon.png"},
        //     {id:4, name: "Зарплата", img:"../../public/salaryIcon.png"},
        // ]

        return{
            categoryArr, transaction, closeWindow, showModal, nameNewCategory, addCategory, updateCategory, newIcon, moreIconArr, clicktoIcon,
        }
    },
    components: {
        TotalBalanceVue,
        CategorisComponentVue
    }
}
</script>


<style scoped>
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
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 20px;
    background-color: #F1FFF3;
    border-radius: 20px;
}

.modalInfo span{
    position: absolute;
    top: 0px;
    right: 10px;
    color: #0068FF;
    font-weight: 500;
    font-size: 30px;
}

.iconCont{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
}

.icon{
    width: 30px;
    height: 30px;
}

.iconAdd{
    margin-right: 5px;
    background-color: #6DB6FE;
}
.iconAdd.selected{
    background-color: #0068FF;
}
</style>