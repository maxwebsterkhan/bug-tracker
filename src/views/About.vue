<template>
  <nav
    class="navbar container is-fullhd is-dark"
    role="navigation"
    aria-label="main navigation"
    style="padding: 9px 0"
  >
    <div class="navbar-brand"></div>
    <div id="navbar" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item"></div>
        <div class="navbar-item">
          <div @click="toggleButton" class="buttons">
            <button class="button is-dark">
              <router-link to="/view" class="navbar-item"
                >View Issues</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section class="hero is-large container is-fullhd hero-colors">
    <div class="hero-body is-fullhd">
      <p style="font-size: 70px" class="title">About</p>
      <p style="font-size: 30px; padding-top: 10px" class="subtitle">
        This was a made for the BMW team at Zone Digital.
      </p>
      <p style="font-size: 28px;" class="subtitle">Find me at:</p>
      <div align="center">
        <button
          style="background-color: rgb(216, 216, 216)"
          class="button is-large"
        >
          <span class="icon is-medium">
            <i class="fab fa-github"></i>
          </span>
          <span
            ><a href="https://github.com/maxwebsterkhan/bug-tracker"
              >GitHub</a
            ></span
          >
        </button>
        <button
          style="background-color: rgb(216, 216, 216)"
          class="button is-large"
        >
          <span class="icon is-medium">
            <i class="fab fa-linkedin"></i>
          </span>
          <span
            ><a href="https://linkedin.com/in/max-webster-khan"
              >Linkedin</a
            ></span
          >
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.pBottom10 {
  padding-bottom: 2rem;
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
nav {
  a {
    font-weight: bold;
    color: #e0e0e0;
    &.button-hover-color {
      color: #919191;
    }
    
  }
}
</style>

