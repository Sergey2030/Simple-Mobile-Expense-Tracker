<template>
    <div class="totalConsumptionCont">
        <p>Самые большие траты</p>
        <div class="totalCons">
            <div class="totalStrokeOne">
                <div class="foodTotal">
                    <img src="../../public/restaurant.png" alt="">
                    <div class="foodInfo">
                        <p>Еда</p>
                        <span>-${{ foodMoney }}</span>
                    </div>
                </div>
                <div class="sportTotal">
                    <img src="../../public/dumbbell.png" alt="">
                    <div class="sportInfo">
                        <p>спорт</p>
                        <span>-${{ sportMoney }}</span>
                    </div>
                </div>
            </div>
            <div class="totalStrokeTwo">
                <div class="transportTotal">
                    <img src="../../public/bus.png" alt="">
                    <div class="transportInfo">
                        <p>транспорт</p>
                        <span>-${{ transportMoney }}</span>
                    </div>
                </div>
                <div class="clothTotal">
                    <img src="../../public/clothes-hanger.png" alt="">
                    <div class="clothInfo">
                        <p>одежда</p>
                        <span>-${{ clothMoney }}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
    setup(){
        const foodMoney = ref(0)
        const sportMoney = ref(0)
        const transportMoney = ref(0)
        const clothMoney = ref(0)

        const calculateCategorySums = () => {
            const transactions = JSON.parse(localStorage.getItem("transaction")) || []


            transactions.forEach((transaction) => {
                const { category, money } = transaction

                switch (category) {
                    case "Еда":
                            foodMoney.value += parseFloat(money)
                        break;
                    case "Спорт":
                            sportMoney.value += parseFloat(money)
                        break;
                    case "Транспорт":
                            transportMoney.value += parseFloat(money)
                        break;
                    case "Одежда":
                            clothMoney.value += parseFloat(money)
                        break;
                    default:
                        break;
                    }
            })
        }


        onMounted(() => {
            calculateCategorySums()
        })

        return{
            foodMoney, sportMoney, transportMoney, clothMoney
        }
    }
}
</script>


<style scoped>
.totalConsumptionCont{
    height: 30%;
    border-radius: 40px 40px 0px 0px;
    padding: 27px 37px;
    background-color: #F1FFF3;
} 

.totalCons{
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #00D09E;
    border-radius: 31px;
}

.totalStrokeOne, .totalStrokeTwo{
    padding: 10px;
    display: flex;
    align-items: end;
    justify-content: end;
    width: 100%;
    height: 50%;
}

.totalStrokeOne{
    border-bottom: 3px solid #fff;
}

.foodTotal, .sportTotal, .transportTotal, .clothTotal{
    width: 40%;
    display: flex;
    align-items: center;
    justify-items: space-between;
}

.foodTotal, .sportTotal, .transportTotal, .clothTotal, img{
    margin-right: 20px;
}


.totalCons p{
    font-weight: 400;
    font-size: 15px;
    color: #052224;
}

.totalCons span{
    font-weight: 700;
    font-size: 15px;
    color: #0068FF;
}

</style>