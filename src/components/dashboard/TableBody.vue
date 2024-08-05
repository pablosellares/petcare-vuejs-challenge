<script setup>
import vaccination from "../../data/vaccination.json";
</script>

<template>
  <div class="table-body-header">
    <div class="table_component" role="region" tabindex="0">
      <table>
        <tbody v-for="item in vaccination">
          <tr>
            <td>{{ item.name }}</td>
            <td>
              <span class="badge" :class="item.class">{{ item.type }}</span>
            </td>
            <td>{{ item.date }}</td>
            <td>
              <button :class="item.buttonType">
                {{ item.veterinar }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table-body_header {
  padding: 24px;
}

.table_component {
  border-radius: 8px 8px 0 0;
  overflow: auto;
  width: 100%;
}

.table_component table {
  border-right: 1px solid hsla(222, 68%, 91%, 1);
  border-bottom: 1px solid hsla(222, 68%, 91%, 1);
  border-left: 1px solid hsla(222, 68%, 91%, 1);
  height: 100%;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  border-radius: 8px 8px 0 0;
  border-spacing: 1px;
  text-align: left;
}

.table_component caption {
  caption-side: top;
  text-align: left;
}

.table_component tr {
  padding: 0 16px;
}

.table_component th {
  border-bottom: 1px solid hsla(222, 68%, 91%, 1);
  background-color: #eceff1;
  color: #000000;
}

.table_component td {
  border-bottom: 1px solid hsla(222, 68%, 91%, 1);
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
  padding: 16px;
}

.badge {
  display: block;
  min-width: 100%;
  text-align: center;
  width: 88px;
}

.badge-overdue {
  background-color: hsla(346, 74%, 95%, 1);
  border: 1px solid hsla(346, 77%, 86%, 1);
  border-radius: 8px;
  color: hsla(346, 63%, 51%, 1);
  font-size: 12px;
  padding: 8px 12px;
}

.badge-noncore {
  background-color: hsla(35, 74%, 95%, 1);
  border: 1px solid hsla(36, 77%, 86%, 1);
  border-radius: 8px;
  color: hsla(36, 88%, 58%, 1);
  font-size: 12px;
  padding: 8px 12px;
}

.badge-core {
  background-color: hsla(150, 50%, 95%, 1);
  border: 1px solid hsla(151, 48%, 83%, 1);
  border-radius: 8px;
  color: hsla(151, 62%, 40%, 1);
  font-size: 12px;
  padding: 8px 12px;
}

button {
  font-size: 11px;
  padding: 8px;
  min-width: 100%;
  width: 96px;
}

button.secondary {
  background-color: #fff;
  border: 1px solid hsla(222, 68%, 91%, 1);
  color: hsla(215, 65%, 12%, 1);
}
</style>
