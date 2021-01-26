<template>
  <nav
    class="navbar container is-fullhd"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong class="is-size-4">Bug Tracker</strong>
      </a>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="button-block">
      <button
        v-if="!$auth.isAuthenticated"
        @click="login"
        class="button is-xl is-dark"
      >
        Sign Up to Browse Events
      </button>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact Us</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div v-if="!$auth.loading.value">
            <button
              class="button is-dark"
              v-if="!$auth.isAuthenticated.value"
              @click="login"
            >
              Log in
            </button>
            <button
              class="button is-dark"
              v-if="$auth.isAuthenticated.value"
              @click="logout"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
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
  }
}
</style>


