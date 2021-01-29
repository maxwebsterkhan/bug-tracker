<template>
  <div class="home"></div>
  <search-bar style="padding: 10px 0"></search-bar>

  <!-- Hero content: will be in the middle -->
  <section class="hero is-large container is-fullhd hero-colors">
    <div class="hero-body is-fullhd">
      <p style="font-size: 70px" class="title">Welcome!</p>
      <p
        style="font-size: 40px"
        v-if="$auth.isAuthenticated.value"
        class="title"
      >
        {{ $auth.user.value.name }}
      </p>
    </div>
  </section>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";

export default {
  components: { SearchBar },
  props: {
    isMySiblingClicked: {
      type: Boolean,
    },
  },
  name: "Home",
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: rgb(36, 36, 36);
  a {
    font-weight: bold;
    color: #e0e0e0 !important;
    &.router-link-exact-active {
      color: #919191;
    }
  }
}
.title {
  text-align: center;
}
.subtitle {
  text-align: center;
}
.hero-colors {
  background-color: rgb(216, 216, 216) !important;
}
</style>
