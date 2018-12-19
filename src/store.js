import Vue from "vue";
import Vuex from "vuex";
import { createPersistedState } from "vuex-electron";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    addNote(state, { index }) {
      const emptyNote = { value: "" };
      if (!index) {
        state.notes.push(emptyNote);
      } else {
        state.notes.splice(index, 0, emptyNote);
      }
    },
    removeNote(state, id) {
      state.notes.splice(id, 1);
    }
  },
  actions: {
    addNote({ commit }, index) {
      if (index) {
        commit("addNote", { index });
      } else {
        commit("addNote", {});
      }
    }
  },
  getters: {
    notes: state => state.notes
  },
  plugins: [createPersistedState()]
});
