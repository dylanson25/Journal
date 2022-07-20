/**
 * Las acciones pueden ser acciones asincronas que
 * pueden mandar a llamar unamutacion
 */
import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get(`/entries/${localStorage.getItem('localId')}.json`);
  
  if (!data){
    commit('setEntries', [])
    return
  }

  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};
// manejo de entradas
export const updateEntry = async ({ commit }, { date, text, picture, id }) => {
  const { data } = await journalApi.put(`/entries/${localStorage.getItem('localId')}/${id}.json`, {
    date,
    text,
    picture,
  });
  commit("updateEntry", { id, ...data });
};
export const createEntry = async ({ commit }, entry) => {
  const dataToSave = { ...entry };
  const {
    data: { name },
  } = await journalApi.post(`/entries/${localStorage.getItem('localId')}.json`, dataToSave);
  commit("addEntry", { id: name, ...dataToSave });
  return name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${localStorage.getItem('localId')}/${id}.json`);
  commit('deleteEntry', id)
};
