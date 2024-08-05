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
} from "chart.js";
import { Line } from "vue-chartjs";
import * as chartConfig from "../../chartConfig.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    return chartConfig;
  },
};
</script>

<template>
  <div class="module">
    <div class="chart">
      <div class="chart-header">
        <div class="chart-header_left"><h4>Health Monitoring</h4></div>
        <div class="chart-header_right">
          <form action="">
            <select name="chart-select" id="chart-select">
              <option value="monthly">Monthly</option>
            </select>
          </form>
        </div>
      </div>
      <ul class="chart-nav">
        <li class="active">
          <i><img src="../../assets/Icon/Stress.svg" alt="" /></i
          ><span>Stress level</span>
        </li>
        <li>
          <i><img src="../../assets/Icon/Pulse.svg" alt="" /></i
          ><span>Pulse</span>
        </li>
        <li>
          <i><img src="../../assets/Icon/Temperature.svg" alt="" /></i
          ><span>Temperature</span>
        </li>
        <li>
          <i><img src="../../assets/Icon/Calories.svg" alt="" /></i
          ><span>Calories burned</span>
        </li>
      </ul>
      <div class="chart-content">
        <Line :data="data" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.module {
  border: 1px solid hsla(222, 68%, 91%, 1);
  flex-basis: 70%;
}

.chart-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

h4 {
  opacity: 0.7;
  text-transform: uppercase;
}

form select {
  background: url("../../assets/Icon/Arrow.svg") right 12px center no-repeat;
  background-size: 16px;
  border: 1px solid hsla(222, 68%, 91%, 1);
  border-radius: 8px;
  padding: 8px 32px 8px 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

form select:focus {
  outline: none;
}

.chart-nav {
  border: 1px solid hsla(222, 68%, 91%, 1);
  border-radius: 8px;
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding: 10px;
}

li {
  align-items: center;
  color: hsla(215, 65%, 12%, 1);
  display: flex;
  height: 48px;
  justify-content: center;
  padding: 12px 24px 12px 24px;
  gap: 10px;
  border-radius: 8px;
  opacity: 0.7;
  text-decoration: none;
  transition: all 125ms ease-in-out;
  width: 100%;
}

li:hover {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
}

li:hover,
li.active {
  background-color: hsla(212, 77%, 56%, 1);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  padding: 12px 24px;
  text-decoration: none;
  width: 100%;
}

li:hover a,
li:hover img {
  color: #fff;
  filter: brightness(0) invert(1);
}

li i {
  display: flex;
  justify-content: center;
}

li span {
  font-size: 12px;
}
</style>
