<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"><slot name="title"></slot></p>
        <button
          class="delete"
          @click="$emit('close')"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        <slot name="details"></slot>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="$emit('close')">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>