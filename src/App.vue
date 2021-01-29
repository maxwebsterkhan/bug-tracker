<template>
  <div id="app">
    <Nav />

    <router-view />
  </div>
</template>
<script>
import Nav from "./components/Nav";

export default {
  name: "app",
  components: {
    Nav,
  },
  data() {
    return {
      isSibling1Clicked: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>