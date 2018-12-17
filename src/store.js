import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: ["Hello World"]
  },
  mutations: {
    addNote(state) {
      state.notes.push("");
    },
    removeNote(state, id) {
      state.notes.splice(id, 1);
    }
  },
  actions: {}
});
