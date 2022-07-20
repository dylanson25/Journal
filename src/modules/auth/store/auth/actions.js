import authApi from "@/api/authApi";

export const createUser = async ({ commit }, user) => {
  const { name, email, pswrd: password } = user;

  try {
    const { data } = await authApi.post(":signUp", {
      email,
      password,
      returnSecureToken: true,
    });
    const { idToken, refreshToken } = data;

    const resp = await authApi.post(":update", { displayName: name, idToken });
    console.log(resp);
    delete user.pswrd;

    commit("loginUser", { user, idToken, refreshToken });

    return { ok: true, message: "USER-CREATED" };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};
export const signInUser = async ({ commit }, user) => {
  const { email, pswrd: password } = user;

  try {
    const { data } = await authApi.post(":signInWithPassword", {
      email,
      password,
      returnSecureToken: true,
    });
    const { displayName, idToken, refreshToken } = data;
    delete user.pswrd;
    user.name = displayName;
    commit("loginUser", { user, idToken, refreshToken });

    return { ok: true, message: " " };
  } catch (error) {
    return { ok: false, message: error.response.data.error.message };
  }
};

export const checkAuthentication = async ({ commit }) => {
  const idToken = localStorage.getItem("idToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!idToken) {
    commit("logout");
    return { ok: false, message: "No hay token en la peticion" };
  }

  try {
    const { data } = await authApi.post(":lookup", { idToken });
    const { displayName, email } = data.users[0];
    const user = {
      name: displayName,
      email,
    };
    commit("loginUser", { user, idToken, refreshToken });
    return { ok: true, message: "" };
  } catch (error) {
    commit("logout");
    return { ok: false, message: error.response.data.message };
  }
};
