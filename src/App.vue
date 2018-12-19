<template>
  <div id="app">
    <h1>Notes</h1>
    <Notes/>
    <button v-on:click="handleAddNote">+ Add a note</button>
  </div>
</template>

<script>
import Notes from "./components/Notes.vue";

export default {
  name: "app",
  components: {
    Notes
  },
  methods: {
    handleAddNote: function() {
      this.$store.dispatch("addNote", null);
    }
  }
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
    font-weight: lighter;
  }

  h1 {
    padding: 0;
    display: flex;
    margin: 0;
  }
}

body {
  margin: 0;
  padding: 0;
}

html {
  -webkit-app-region: drag;
}

button {
  -webkit-app-region: no-drag;
}
</style>
