<script>
import { useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

export default {
  setup(){
    const activeTab = ref('home')

    const setActiveTab = (tabName) => {
      activeTab.value = tabName;
    };

    return{
      setActiveTab, activeTab,
    }
  }
}
</script>

<template>
  <div>
    <div class="bebe">
      <router-view></router-view>
    </div>
    <div class="navBlock">
      <nav>
        <ul>
          <li
            :class="{ active: activeTab === 'home' }"
              @click="setActiveTab('home')"
            >
            <router-link to="/"><img src="../public/Home.png" alt=""></router-link>
          </li>
          <li
              :class="{ active: activeTab === 'analysis' }"
              @click="setActiveTab('analysis')"
            >
            <router-link to="/analysis"><img src="../public/Analysis.png" alt=""></router-link>
          </li>
          <li
              :class="{ active: activeTab === 'categories' }"
              @click="setActiveTab('categories')"
            >
            <router-link to="/categories"><img src="../public/Category.png" alt=""></router-link>
          </li>
          <li
              :class="{ active: activeTab === 'transaction' }"
              @click="setActiveTab('transaction')"
            >
            <router-link to="/transaction"><img src="../public/Vector.png" alt=""></router-link>
          </li>
          <li
              :class="{ active: activeTab === 'profile' }"
              @click="setActiveTab('profile')"
            >
            <router-link to="/profile"><img src="../public/Profile.png" alt=""></router-link>
          </li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<style scoped>
.navBlock{
  padding: 25px 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #DFF7E2;
  width: 100%;
  height: 108px;
  position: fixed;
  z-index: 2;
  border-radius: 70px 70px 0px 0px;
}

.navBlock nav {
  width: 100%;
}

.navBlock nav ul li{
  padding: 10px;
  border-radius: 30px;
  background-color: #DFF7E2;
  list-style: none;
  list-style-type: none;
}

.navBlock nav ul li.active{
  background-color: #00D09E;
}

.navBlock nav ul{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bebe{
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: column;
  height: 90vh;
  background-color: #00D09E;
}
</style>
