<script setup>
import Chat from "../../data/chat.json";
</script>

<template>
  <div class="message" v-for="item in Chat">
    <div class="message-header">
      <div class="message-header-left">
        <div class="message-header-left_status">
          <span
            class="message-header-left_status--online"
            :class="item.status"
          ></span>
        </div>
        <div class="message-header-left_name">{{ item.name }}</div>
      </div>
      <div class="message-header-right">
        <div class="message-header-right_date">{{ item.date }}</div>
      </div>
    </div>
    <div class="message-body">
      <p>
        {{ item.message }}
      </p>
    </div>
    <span class="chat-notification" v-if="item.notifications">{{
      item.notifications
    }}</span>
  </div>
</template>

<style>
.message {
  margin-bottom: 28px;
  position: relative;
}

.message:hover {
  cursor: pointer;
}

.message-header {
  display: flex;
  justify-content: space-between;
  line-height: 24px;
}

.message-header-left_status--online::after {
  background-color: hsla(151, 62%, 40%, 1);
  border-radius: 50%;
  content: "";
  width: 14px;
  height: 14px;
  position: absolute;
}

.message-header-left_name {
  font-weight: 500;
  margin-bottom: 4px;
  margin-left: 28px;
}

.message-body {
  height: 22px;
  overflow-y: hidden;
  position: relative;
}

.message-body p {
  opacity: 0.7;
}

.chat-notification {
  align-items: center;
  background: hsla(346, 77%, 56%, 1);
  border-radius: 8px;
  color: #fff;
  display: flex;
  margin-left: 16px;
  padding: 3px 9px;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 24px;
}
</style>
