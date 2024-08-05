<script setup>
import percentages from "../../data/percentages.json";
</script>

<template>
  <div class="percentage-card" v-for="item in percentages" :key="item.id">
    <div class="percentage-header">
      <h4>Activity</h4>
      <form>
        <select class="select" name="dropdown" id="dropdown">
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </form>
    </div>
    <div class="percentage-body">
      <svg
        width="200"
        height="200"
        viewBox="-25 -25 250 250"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style="transform: rotate(-90deg)"
      >
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#e0e0e0"
          stroke-width="16px"
          stroke-dasharray="565.48px"
          stroke-dashoffset="0"
        ></circle>
        <circle
          r="90"
          cx="100"
          cy="100"
          :stroke="item.color"
          stroke-width="16px"
          stroke-linecap="round"
          :stroke-dashoffset="item.strokeDashoffset"
          fill="transparent"
          stroke-dasharray="565.48px"
        ></circle>
        <text
          x="60px"
          y="115px"
          fill="#000000"
          font-size="52px"
          font-weight="bold"
          style="transform: rotate(90deg) translate(0px, -196px)"
        >
          {{ item.percentage }}%
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.percentage-card {
  background-color: #fff;
  border: 1px solid hsla(222, 68%, 91%, 1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 28px;
}

.percentage-header {
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
  padding: 8px 24px 8px 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

form select:focus {
  outline: none;
}

svg {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
}

svg text {
  font-size: 48px;
  font-weight: 600;
}
</style>
