/**
 * Las mutaciones son sincronas y hacen la modifiacion
 * del state
 */
export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  const idx = state.entries.findIndex(({ id }) => entry.id === id);
  state.entries[idx] = entry;
};

export const addEntry = (state, entry) => {
  state.entries.unshift(entry);
};
export const deleteEntry = (state, id) => {
  const idx = state.entries.findIndex((entry) => id === entry.id);
  state.entries.splice(idx, 1);
};
