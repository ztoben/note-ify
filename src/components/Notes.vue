<template>
  <div id="notes-container">
    <div
      class="note-container"
      v-for="(note, index) in notes"
      @mouseover="active = index"
      @mouseout="active = null"
      :key="index"
      ref="noteContainer"
    >
      <textarea
        v-model="note.value"
        @input="autoExpand"
        @focus="handleFocus(index)"
        @blur="handleBlur"
        @keypress.enter="handleAddNote"
        wrap="soft"
      ></textarea>
      <button v-if="active === index" @click="handleRemoveNote(index)">X</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Notes",
  data() {
    return {
      active: null,
      selected: null
    };
  },
  computed: {
    ...mapState(["notes"])
  },
  methods: {
    ...mapMutations(["removeNote", "addNote"]),
    autoExpand: function(event) {
      function getPropValue(prop) {
        return parseInt(computed.getPropertyValue(prop), 10);
      }

      event.target.style.height = "inherit";

      const computed = window.getComputedStyle(event.target);

      const height =
        getPropValue("border-top-width") +
        getPropValue("padding-top") +
        getPropValue("padding-bottom") +
        getPropValue("border-bottom-width") +
        event.target.scrollHeight;

      event.target.style.height = `${height}px`;
    },
    handleAddNote: function(event) {
      event.preventDefault();
      this.selected += 1;
      this.$store.commit("addNote", { index: this.selected });
    },
    handleRemoveNote: function(index) {
      this.removeNote(index);
      this.$nextTick(() => {
        if (this.notes.length > 0) {
          this.$refs.noteContainer[index].children[0].focus();
        }
      });
    },
    handleFocus: function(index) {
      this.selected = index;
    },
    handleBlur: function() {
      this.selected = null;
    }
  },
  watch: {
    selected: function(newSelected) {
      if (newSelected !== null) {
        this.$nextTick(() => {
          this.$refs.noteContainer[newSelected].children[0].focus();
        });
      }
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
    align-items: flex-start;

    > * {
      display: inline-flex;
      margin: 0;
      padding: 0;
    }

    textarea {
      width: calc(100% - 25px);
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
      height: 18px;
      width: 18px;
      display: flex;
      align-content: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid gray;
      margin-top: 6px;

      &:hover {
        background-color: lightgray;
      }

      &:active {
        background-color: gray;
        color: white;
      }
    }

    &:before {
      content: "–"; /* en dash */
      margin-left: -1em;
    }
  }
}
</style>
