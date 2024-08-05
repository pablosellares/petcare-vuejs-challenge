<script setup>
import ChatMessage from "./ChatMessage.vue";
</script>

<template>
  <div class="module">
    <h4>CHAT</h4>
    <ChatMessage />
  </div>
</template>

<style scoped>
.module {
  border: 1px solid hsla(222, 68%, 91%, 1);
  flex-basis: 40%;
}

h4 {
  opacity: 0.7;
  margin-bottom: 24px;
}
</style>
