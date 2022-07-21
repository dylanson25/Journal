<template>
  <nav class="navbar bg-primary">
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
        <li class="nav__item"><a @click="onLogin" class="item__navigate item__navigate--hover">Login</a></li>
        <li class="nav__item">/</li>
        <li class="nav__item"><a @click="onLogin" class="item__navigate item__navigate--hover">Register</a></li>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";

export default {    
  setup() {
    const router = useRouter();
    return {
      onLogin: () => {
        router.push({ name: "login" });
      },
      onRegister: () => {
        router.push({ name: "register" });
      },
    };
  },
};
</script>

<style scoped>
    .nav__items{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        padding: 0;
        margin-right: 2rem;
        width: 8rem;

    }
    .nav__item{
        color: white;
        
    }
    .item__navigate{
        color: white;
        font-weight: 600;
        text-decoration: none;
    }
    .item__navigate:hover{
        color: wheat;
        cursor: pointer;
        font-size: 1rem;
        text-decoration: underline;
    }
</style>