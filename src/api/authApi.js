// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyCh82f7hVgojmDt5mEn_HEDY2bhzwR7Vs0]
import axios from "axios";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyCh82f7hVgojmDt5mEn_HEDY2bhzwR7Vs0",
  },
});

export default authApi;
