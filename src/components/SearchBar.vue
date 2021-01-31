<template>
  <nav
    class="navbar container is-fullhd is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand"></div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div
            v-if="!buttonAddForm && $auth.isAuthenticated.value"
            class="field has-addons"
          >
            <div class="control">
              <input class="input" type="text" placeholder="Search an issue" />
            </div>
            <div class="control">
              <a class="button is-dark"> Search </a>
            </div>
          </div>
        </div>
        <div class="navbar-item">
          <div v-if="buttonAddForm" @click="toggleButton" class="buttons">
            <button class="button is-dark">
              <router-link to="/view" class="navbar-item"
                >View Issues</router-link
              >
            </button>
          </div>
          <div v-else class="buttons" @click="toggleButton">
            <button class="button is-dark">
              <router-link to="/add" class="navbar-item"
                >Add Issues</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["buttonClicked"],
  data() {
    return {
      buttonAddForm: true,
    };
  },
  methods: {
    toggleButton() {
      this.buttonAddForm = !this.buttonAddForm;
      this.emitter.emit("toggle-content", this.buttonAddForm);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: rgb(44, 44, 44);
  a {
    font-weight: bold;
    color: #e0e0e0;
    &.router-link-exact-active {
      color: #919191;
    }
    &.button-hover-color {
      background-color: purple;
    }
  }
}
</style>