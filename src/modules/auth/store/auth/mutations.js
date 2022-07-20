export const loginUser = (state, { user, idToken, refreshToken, localId }) => {
  if (idToken) {
    localStorage.setItem("idToken", idToken);
    state.idToken = idToken;
  }
  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
    state.refreshToken = refreshToken;
  }
  if(localId){
    localStorage.setItem("localId", localId);
  }
  state.user = user;
  state.status = "authenticated";
};

export const logout = (state) => {
  state.user = null;
  state.idToken = null;
  state.refreshToken = null;
  state.ref = null;
  state.status = 'not-authenticated'

  localStorage.removeItem('idToken')
  localStorage.removeItem('localId')
  localStorage.removeItem('refreshToken')
};
