<template>
  <div id="notes-container">
    <ul>
      <li @mouseover="active = !active" @mouseout="active = !active" v-for="(note, index) in notes" :key="note">
        <div class="note-container">
          <span>{{ note }}</span>
          <button v-if="active" @click="removeNote(index)">X</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Notes",
  data() {
    return {
      active: false
    };
  },
  computed: {
    ...mapState(["notes"])
  },
  methods: {
    ...mapMutations(["removeNote"])
  }
};
</script>

<style scoped lang="scss">
#notes-container {
  display: flex;
  flex: 1;
  padding: 0 0 0 20px;
  overflow: scroll;
  width: calc(100% - 20px);

  .note-container {
    width: 100%;
    display: flex;
    flex-direction: row;

    > * {
      display: inline-flex;
      margin: 0;
      padding: 0;
    }

    span {
      flex: 1;
      line-height: 24px;
      padding-left: 10px;
    }

    button {
      font-size: 12px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  ul > li:before {
    content: "–"; /* en dash */
    margin-left: -1.5em;
  }

  li {
    display: flex;
    margin: 0 0 0 10px;
    height: 24px;
  }

  a {
    color: #42b983;
  }
}
</style>
