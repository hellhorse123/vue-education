<template>
  <div
    class="dropzone"
    @dragover.prevent="dragged = true"
    @dragleave.prevent="dragged = false"
    @drop.prevent="handleDrop"
    :class="{ 'dragged-over': dragged }"
  >
    <DropZoneMessage v-show="showMessage" />
    <slot />
  </div>
</template>

<script>
import { ref } from "vue";
import DropZoneMessage from "./DropZoneMessage.vue";
export default {
  props: {
    showMessage: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const dragged = ref(false);
    const handleDrop = (event) => {
      dragged.value = false;
      emit("files-dropped", event.dataTransfer.files);
    };
    return { dragged, handleDrop };
  },
  emits: ["files-dropped"],
  components: { DropZoneMessage },
};
</script>

<style scoped>
.dropzone {
  min-height: 80vh;
  border: 2px solid #fff;
  background: #fff;
  padding: 0.3em;
}

.dragged-over {
  background: #e8f0fe;
  border: 2px solid #4285f4;
}
</style>
