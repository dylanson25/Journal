<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        alt="Vue logo"
        height="24"
        class="d-inline-block align-text-top mx-2"
      />
      {{userName}}
    </a>
    <div>
      <button class="btn btn-outline-info mx-2"
      @click="onLogout">
        <i class="fa fa-sign-out-alt" />
      </button>
    </div>
  </nav>
</template>

<script>
import useAuth from "@/modules/auth/composables/useAuth";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { userName, logout } = useAuth();
    const router = useRouter();
    return {
      userName,
      onLogout: () => {
        router.push({ name: "login" });
        logout();
      },
    };
  },
};
</script>