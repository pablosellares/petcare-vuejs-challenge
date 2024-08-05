<script setup>
import Sidebar from "../components/Sidebar.vue";
import Topbar from "../components/Topbar.vue";
import ModuleA from "../components/dashboard/ModuleA.vue";
import ModuleB from "../components/dashboard/ModuleB.vue";
import ModuleC from "../components/dashboard/ModuleC.vue";
import ModuleD from "../components/dashboard/ModuleD.vue";
</script>

<template>
  <div class="page">
    <Sidebar />

    <div id="dashboard">
      <Topbar />

      <main>
        <div class="left">
          <ModuleA />

          <ModuleB />
        </div>

        <div class="right">
          <ModuleC />

          <ModuleD />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
#dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 20px;
  background: #f2f5fa;
  display: flex;
  gap: 20px;
}

main > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.left {
  flex-basis: 60%;
}

.right {
  flex-basis: 40%;
}

.module {
  background: white;
}
</style>
