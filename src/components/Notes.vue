<template>
  <div class="notes-container">

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Notes",
  computed: {
    ...mapState(["notes"])
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>