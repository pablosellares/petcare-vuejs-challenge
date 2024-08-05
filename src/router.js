import { createMemoryHistory, createRouter } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import PetProfile from "./views/PetProfile.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/pet-profile", component: PetProfile },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
