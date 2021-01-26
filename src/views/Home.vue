<template>
  <div class="home"></div>
  <search-bar></search-bar>
  <div class="container is-fullhd">
    <div class="about">
      <div class="hero is-dark">
        <div class="hero-body">
          <div>
            <h1 class="title is-size-1">Welcome!</h1>
          </div>
        </div>
      </div>
      <div class="container pBottom10">
        <p class="org-description is-size-4">
          This is a project made as a prototype for a bug tracking application.
        </p>
      </div>
    </div>
  </div>
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
  background-color: rgb(122, 122, 122);
  a {
    font-weight: bold;
    color: #e0e0e0 !important;
    &.router-link-exact-active {
      color: #919191;
    }
  }
}
.hero-body {
  background-color: rgb(122, 122, 122);
}
.title {
  text-align: center;
}
.subtitle {
  text-align: center;
}
.container {
  background-color: rgb(176, 176, 176);
  text-align: center;
}
</style>
