<script setup></script>

<template>
  <div id="topbar">
    <div class="topbar-left">
      <form action="">
        <input type="search" name="search" id="search" placeholder="Search" />
      </form>
    </div>
    <div class="topbar-right">
      <a href="" class="topbar-help"
        ><img src="../assets/Icon/Help.svg" alt=""
      /></a>
      <a href="" class="topbar-notifications"
        ><img src="../assets/Icon/Notifications.svg" alt=""
      /></a>
      <button class="add-widget">Add Widget</button>
    </div>
  </div>
</template>

<style scoped>
#topbar {
  border-bottom: 1px solid #f2f5fa;
  display: flex;
  justify-content: space-between;
  height: 96px;
  padding: 24px;
}

.topbar-left,
form,
#search {
  height: 100%;
}

.topbar-left {
  width: 60%;
}

.topbar-right {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 40%;
}

.topbar-right img {
  opacity: 0.7;
}

.topbar-right img:hover {
  opacity: 1;
}

#search {
  background: url("../assets/Icon/Search.svg") 16px no-repeat;
  background-color: #fff;
  background-size: 20px;
  border: 1px solid hsla(222, 68%, 91%, 1);
  border-radius: 8px;
  padding: 13px 13px 13px 48px;
  width: 100%;
}

#search:focus {
  outline: none;
}

.topbar-help,
.topbar-notifications {
  margin-right: 24px;
}
</style>
