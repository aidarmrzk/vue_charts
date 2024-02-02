<template>
    <div class="chart">
        <Line :data="data" :options="options"/>
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from '@/configs/chartConfig.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export default {
    name: 'LineChart',
    components: {
        Line
    },
    data() {
        return chartConfig
    }
}
</script>
<style scoped>
.chart {
    margin: 0 auto;
    max-width: 1520px;
    height: 450px;
    border-radius: 8px;
    background-color: #1B1B1E;
}
</style>