<template>
  <form @submit.prevent="$emit('submit')">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"><slot name="title"></slot></p>
        </header>
        <section class="modal-card-body">
          <slot name="details"></slot>
        </section>
        <section class="modal-card-body">
          <slot name="severity"></slot>
        </section>
        <section class="modal-card-body">
          <slot name="author"></slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button">Submit</button>
          <button class="button" @click.prevent="$emit('close')">Close</button>
        </footer>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["close", "submit"],
};
</script>