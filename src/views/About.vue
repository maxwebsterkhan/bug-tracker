<template>
  <div class="container is-fullhd">
    <div class="about">
      <div class="hero is-dark">
        <div class="hero-body">
          <div>
            <h1 class="title is-size-1">About this Bug Tracker</h1>
          </div>
        </div>
      </div>
      <div class="container pBottom10">
        <p class="org-description is-size-4">
          This is a project made as a prototype for a bug tracking application.
        </p>
        <p class="org-description is-size-4">I created this project using:</p>
        <ul class="org-description">
          <li class="is-size-4">Vue.js</li>
          <li class="is-size-4">Auth0</li>
          <li class="is-size-4">Bulma</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.org-description {
  margin-top: 2rem;
  text-align: center;
  padding-left: 10rem;
  padding-right: 10rem;
}
.container {
  background-color: #eee;
}
h1 {
  text-align: center;
}
.pBottom10 {
  padding-bottom: 2rem;
}
</style>

