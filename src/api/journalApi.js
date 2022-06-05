import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://journal-vue-52048-default-rtdb.firebaseio.com",
});

export default journalApi;
