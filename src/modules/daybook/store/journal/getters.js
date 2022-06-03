/**
 * Los getters es para traer informacion de el state
 * para procesarla
 */
export const getEntriesByTerm =
  (state) =>
  (term = "") => {
    return term.length === 0
      ? state.entries
      : state.entries.filter((entry) =>
          entry.text.toLowerCase().includes(term.toLocaleLowerCase())
        );
  };

export const getEntriesById =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((entry) => entry.id === id);
    if (!entry) return
    return {...entry}
  };
export const createEntry = (/*state*/) => {};
