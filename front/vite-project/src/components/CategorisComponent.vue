<template>
    <div class="Container">
        <div class="cateryCont" v-for="category in categoryArr" :key= "category.id">
            <div class="imgCont">
                <img :src="category.img" alt="">
            </div>
            <p>{{ category.name }}</p>
        </div>
        <div @click="$emit('update-category')" class="cateryCont">
            <div class="imgCont">
                <img src="../../public/plus.png" alt="">
            </div>
            <p>Новая</p>
        </div>
    </div>
</template>


<script>
export default {
    setup(props) {
        // const category = [
        //     {id:0, name: "Спорт"},
        //     {id:1, name: "еда"},
        //     {id:2, name: "Одежда"},
        //     {id:3, name: "Транспорт"},
        //     {id:4,name:"Зарплата"}
        // ]

        // localStorage.setItem("category", JSON.stringify(category))
    },
    props:{
        categoryArr: {
            type: Array,
            required: true
        }
    }
}
</script>


<style scoped>
.Container{
    width: 100%;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
}
.cateryCont{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}

.cateryCont p{
    font-weight: 500;
    font-size: 15px;
    color: #093030;
}


.imgCont{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #6DB6FE;
    border-radius: 25px;
}
</style>