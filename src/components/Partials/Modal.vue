<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p style="font-size: 40px" class="modal-card-title">
          <slot name="title"></slot>
        </p>
        <button
          class="delete"
          @click="$emit('close')"
          aria-label="close"
        ></button>
      </header>
      <section
        style="overflow: auto; word-wrap: break-word"
        class="modal-card-body"
      >
        <div class="content">
          <h1>Details</h1>
          <p><slot name="details"></slot></p>
          <h4>Severity</h4>
          <p><slot name="severity"></slot></p>
          <h4>Author</h4>
          <p><slot name="author"></slot></p>
        </div>
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




