import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {

      }
    ]
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
    removeNote(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
    }
  },
  actions: {}
});
