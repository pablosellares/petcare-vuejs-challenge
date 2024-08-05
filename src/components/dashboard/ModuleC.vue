<script setup>
import TableBody from "./TableBody.vue";
</script>

<template>
  <div class="module">
    <div class="table-header">
      <div class="table-header_left"><h4>VACCINATION SCHEDULE</h4></div>
      <div class="table-header_right">
        <i><img src="../../assets/Icon/Search.svg" alt="" /></i>
        <form action="">
          <select name="vaccination-select" id="vaccination-select">
            <option value="bytipe">By Type</option>
          </select>
        </form>
      </div>
    </div>
    <div class="table-body">
      <div class="table-body_header">
        <span>Name</span>
        <span>Type</span>
        <span>Date</span>
        <span>Veterinar</span>
      </div>
      <TableBody />
    </div>
  </div>
</template>

<style scoped>
.module {
  border: 1px solid hsla(222, 68%, 91%, 1);
  flex-basis: 60%;
}

.table-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}

.table-header_right,
.table-header_right i {
  align-items: center;
  display: flex;
  justify-content: center;
}
.table-header_right i {
  height: 24px;
  margin-right: 24px;
  width: 24px;
}

.table-header_right i:hover {
  cursor: pointer;
}

.table-body_header {
  background-color: hsla(222, 42%, 97%, 1);
  border: 1px solid hsla(222, 68%, 91%, 1);
  border-radius: 8px 8px 0 0;
  color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 24px;
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
</style>
