import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        value: "Hello World"
      }
    ]
  },
  mutations: {
    addNote(state) {
      state.notes.push({ value: "" });
    },
    removeNote(state, id) {
      state.notes.splice(id, 1);
    }
  },
  actions: {}
});
