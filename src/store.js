import Vue from "vue";
import Vuex from "vuex";

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
  actions: {},
  getters: {
    notes: state => state.notes
  }
});
