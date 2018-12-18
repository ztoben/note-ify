<template>
  <div id="notes-container">
    <div class="note-container" @mouseover="active = !active" @mouseout="active = !active" v-for="(note, index) in notes" :key="index">
      <textarea v-model="note.value" @input="autoExpand" wrap="soft"></textarea>
      <button v-if="active" @click="removeNote(index)">X</button>
    </div>
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
    ...mapMutations(["removeNote"]),
    autoExpand: function(event) {
      console.log(event); // eslint-disable-line
      event.target.style.height = "inherit";

      const computed = window.getComputedStyle(event.target);

      const height =
        parseInt(computed.getPropertyValue("border-top-width"), 10) +
        parseInt(computed.getPropertyValue("padding-top"), 10) +
        event.target.scrollHeight +
        parseInt(computed.getPropertyValue("padding-bottom"), 10) +
        parseInt(computed.getPropertyValue("border-bottom-width"), 10);

      event.target.style.height = `${height}px`;
    }
  }
};
</script>

<style scoped lang="scss">
#notes-container {
  display: flex;
  flex-direction: column;
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

    textarea {
      width: calc(100% - 20px);
      line-height: 24px;
      padding-left: 10px;
      outline: none;
      border: none;
      background: transparent;
      overflow: auto;
      resize: none;
      height: 24px;
    }

    button {
      font-size: 12px;
    }

    &:before {
      content: "–"; /* en dash */
      margin-left: -1em;
    }
  }
}
</style>
