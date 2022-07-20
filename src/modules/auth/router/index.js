export default {
  name: "auth",
  component: () =>
    import(
      /*webpackChunkName: "Auth" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "login",
      component: () =>
        import(
          /*webpackChunkName: "Auth" */ "@/modules/auth/views/LoginView.vue"
        ),
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import(
          /*webpackChunkName: "Auth" */ "@/modules/auth/views/RegisterView.vue"
        ),
    },
    // {
    //   Path: "/register",
    //   name: "register",
    //   component: () =>
    //     import(
    //       /*webpackChunkName: "register-View" */ "@/modules/auth/views/RegisterView.vue"
    //     ),
    // },
  ],
};
