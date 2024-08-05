<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="sidebar">
    <div class="logo">
      <i><img src="../assets/logo.svg" alt="" /></i>
      <span>PetCare.</span>
    </div>
    <div class="menu-section">
      <h2>Menu</h2>
      <ul>
        <li class="sidebar-routerlink active">
          <i><img src="../assets/Icon/Dashboard.svg" alt="" /></i
          ><RouterLink to="/">Dashboard</RouterLink>
        </li>
        <li class="sidebar-routerlink">
          <i><img src="../assets/Icon/Pow.svg" alt="" /></i>
          <RouterLink to="/pet-profile">Pet Profile</RouterLink>
        </li>
      </ul>
      <hr />
    </div>
    <div class="menu-section">
      <h2>Analytics</h2>
      <ul>
        <li class="sidebar-routerlink">
          <i><img src="../assets/Icon/HealthMonitoring.svg" alt="" /></i>
          <RouterLink to="/">Health Monitoring</RouterLink>
        </li>
        <li class="sidebar-routerlink">
          <i><img src="../assets/Icon/Vaccine.svg" alt="" /></i>
          <RouterLink to="/">Vaccination Schedule</RouterLink>
        </li>
      </ul>
      <hr />
    </div>
    <div class="menu-section">
      <h2>Schedule</h2>
      <ul>
        <li class="sidebar-routerlink">
          <i><img src="../assets/Icon/Chat.svg" alt="" /></i>
          <RouterLink to="/">Chat</RouterLink>
        </li>
        <li class="sidebar-routerlink">
          <i><img src="../assets/Icon/Calendar.svg" alt="" /></i>
          <RouterLink to="/">Appointments</RouterLink>
          <span class="sidebar-notification">2</span>
        </li>
      </ul>
      <hr />
    </div>
    <div class="menu-section">
      <h2>Help</h2>
      <ul>
        <li class="sidebar-routerlink">
          <i><img src="../assets/Icon/Settings.svg" alt="" /></i>
          <RouterLink to="/">Settings</RouterLink>
        </li>
        <li class="sidebar-routerlink">
          <i><img src="../assets/Icon/Documentation.svg" alt="" /></i>
          <RouterLink to="/">Documentation</RouterLink>
        </li>
      </ul>
      <hr />
    </div>
    <div class="logout">
      <i><img src="../assets/Icon/logout.svg" alt="" /></i>
      <RouterLink to="/login">Log out</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
#sidebar {
  border-right: 1px solid #f2f5fa;
  padding: 24px;
  position: relative;
  width: 312px;
}

.logo {
  display: flex;
  line-height: 28px;
  margin-left: 48px;
  margin-top: 14px;
}

.logo span {
  font-weight: 500;
  margin-bottom: 64px;
  margin-left: 8px;
}

.menu-section {
  margin-bottom: 32px;
}

.logout {
  align-items: center;
  display: flex;
  justify-content: center;
}

.logout img {
  margin-right: 8px;
}

.logout a {
  color: hsla(346, 77%, 56%, 1);
}

.sidebar-routerlink {
  color: hsla(215, 65%, 12%, 1);
  height: 48px;
  padding: 12px 24px 12px 24px;
  gap: 10px;
  border-radius: 8px;
  opacity: 0.7;
  text-decoration: none;
  transition: all 125ms ease-in-out;
  width: 100%;
}

.sidebar-routerlink:hover {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
}

.sidebar-routerlink:hover,
.sidebar-routerlink.active {
  background-color: hsla(212, 77%, 56%, 1);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  padding: 12px 24px;
  text-decoration: none;
  width: 100%;
}

.sidebar-routerlink:hover a,
.sidebar-routerlink:hover img {
  color: #fff;
  filter: brightness(0) invert(1);
}

.sidebar-routerlink.active a {
  color: #fff;
}

.sidebar-routerlink:last-of-type {
  margin-bottom: 32px;
}

.sidebar-notification {
  align-items: center;
  background: hsla(346, 77%, 56%, 1);
  border-radius: 8px;
  color: #fff;
  display: flex;
  margin-left: 16px;
  padding: 3px 9px;
  opacity: 1;
}

hr {
  background-color: hsla(222, 68%, 91%, 1);
  height: 1px;
}

h2 {
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-left: 24px;
  opacity: 0.7;
}

a {
  color: hsla(215, 65%, 12%, 1);
  display: block;
  text-decoration: none;
}

li {
  display: flex;
}
</style>
