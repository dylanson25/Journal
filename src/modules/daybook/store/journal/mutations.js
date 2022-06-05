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

export const addEntry = (/*sate*/) => {};
