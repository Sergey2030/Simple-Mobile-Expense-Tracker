<template>
    <div class="profileCont">
        <header>
            <div class="head">
                <p>Профиль</p>
            </div>
        </header>
        <user-info/>
        <div class="component">
            <div>
                
            </div>
            <div>
                <div>
                    <p>Дата регистрации: </p>
                </div>
                <div>
                    <img src="" alt="">
                    <p>Редактировать</p>
                </div>
                <div>
                    <img src="" alt="">
                    <p>Выход</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import UserInfo from "./UserInfo.vue"
export default {
    setup(){

    },
    components: {
        UserInfo
    }
}
</script>


<style scoped>
.profileCont{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
.component{
    width: 100%;
    border-radius: 50px 50px 0px 0px;
    display: flex;
    align-content: center;
    justify-content: start;
    flex-direction: column;
    min-height: 500px;
    max-height: auto;
    background-color: #F1FFF3;
    padding-bottom: 100px;
    padding: 20px;
}
</style>