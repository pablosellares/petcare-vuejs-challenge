<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div id="login">
    <div style="display: flex">
      <img src="../assets/logo.svg" alt="" />
      <h1>Welcome to Petcare.</h1>
    </div>
    <h4>Login with your username.</h4>
    <form action="">
      <input
        type="text"
        name="username"
        id="login-username"
        placeholder="johndoe"
      />
      <input
        type="password"
        name="password"
        id="login-password"
        placeholder="******"
      />
      <RouterLink to="/" class="recupera-password"
        >Forgot your password?</RouterLink
      >
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<style scoped>
#login {
  align-items: center;
  flex-direction: column;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
}

img {
  margin-right: 24px;
}

h1 {
  font-size: 28px;
  margin-bottom: 8px;
}

h4 {
  margin-bottom: 16px;
}

form {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 340px;
}

#login-username,
#login-password {
  border: 1px solid hsla(222, 60%, 91%, 1);
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 8px;
  width: 100%;
}

.recupera-password {
  color: hsla(215, 65%, 12%, 1);
  font-size: 14px;
  text-align: right;
  width: 100%;
}

button {
  background-color: hsla(212, 77%, 56%, 1);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
  padding: 12px 24px;
  width: 100%;
}
</style>
