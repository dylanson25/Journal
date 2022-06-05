/**
 * Las acciones pueden ser acciones asincronas que
 * pueden mandar a llamar unamutacion
 */
import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, { date, text, picture, id }) => {
  const { data } = await journalApi.put(`/entries/${id}.json`, {
    date,
    text,
    picture,
  });
  commit("updateEntry", {  id, ...data });
};
export const createEntry = async (/*{ commit }*/) => {};
