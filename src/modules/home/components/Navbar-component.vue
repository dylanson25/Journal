<template>
  <nav class="navbar navbar--home bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        alt="Vue logo"
        height="24"
        class="d-inline-block align-text-top mx-2"
      />
      My journal
    </a>
    <ul class="nav__items">
      <li class="nav__item">
        <a @click="onLogin" class="item__navigate item__navigate--hover"
          >Login</a
        >
      </li>
      <li class="nav__item">/</li>
      <li class="nav__item">
        <a @click="onLogin" class="item__navigate item__navigate--hover"
          >Register</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import useAuth from "@/modules/auth/composables/useAuth";
import { useStore } from "vuex";
export default {
  setup() {
    const { authStatus } = useAuth();
    const store = useStore()
    const router = useRouter();
    return {
      onLogin: () => {
        store.commit('journal/clearEntries')
        authStatus.value == "authenticated"
          ? router.push({ name: "daybook" })
          : router.push({ name: "login" });
      },
      onRegister: () => {
        store.commit('journal/clearEntries')
        authStatus.value == "authenticated"
          ? router.push({ name: "daybook" })
          : router.push({ name: "register" });
          
      },
    };
  },
};
</script>

<style scoped>
.nav__items {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-right: 2rem;
  width: 8rem;
  height: 100%;
}
.nav__item {
  color: white;
}
.item__navigate {
  color: white;
  font-weight: 600;
  text-decoration: none;
}
.item__navigate:hover {
  color: wheat;
  cursor: pointer;
  font-size: 17px;
  text-decoration: underline;
}
.navbar--home {
  padding: 0;
  height: 50px;
}
.navbar-brand {
  align-items: center;
  height: 100%;
}
</style>