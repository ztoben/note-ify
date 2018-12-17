<template>
  <div id="app">
    <h1>Notes</h1>
    <Notes/>
  </div>
</template>

<script>
import Notes from "./components/Notes.vue";

export default {
  name: "app",
  components: {
    Notes
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
}
h1 {
  padding: 0;
  display: flex;
}
html {
  -webkit-app-region: drag;
}
button {
  -webkit-app-region: no-drag;
}
</style>
