<template>
  <div>
    <Pie :data="chartData" />
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Регистрируем компоненты Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default {
  props: {
    transaction: {
      type: Array,
      required: true
    }
  },
  components: {
    Pie, // Регистрируем компонент Pie
  },
  setup(props) {
    // Пересчитываем данные для графика на основе транзакций
    const categoryTotals = computed(() => {
      const totals = {};
      props.transaction.forEach(item => {
        if (!totals[item.category]) {
          totals[item.category] = 0;
        }
        totals[item.category] += item.money;
      });
      return totals;
    });

    // Данные для графика
    const chartData = computed(() => {
      const categories = Object.keys(categoryTotals.value);
      const values = Object.values(categoryTotals.value);

      return {
        labels: categories,
        datasets: [
          {
            data: values,
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700', '#8A2BE2'],
            hoverOffset: 4
          }
        ]
      };
    });

    return { chartData };
  }
};
</script>
