<template>
  <nav
    class="navbar container is-fullhd is-dark"
    role="navigation navbarcolour"
    aria-label="main navigation"
    style="padding: 8px 0"
  >
    <div class="navbar-brand"></div>
    <div id="navbar" class="navbar-menu navbarcolour">
      <div class="navbar-end navbarcolour">
        <div class="navbar-item navbarcolour"></div>
        <div class="navbar-item navbarcolour">
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

  <div class="container is-fullhd lightgrey">
    <form
      action="mailto:max.webster-khan@zonedigital.com"
      method="post"
      enctype="text/plain"
    >
      <div class="field">
        <label class="label">Name:</label>
        <p class="control has-icons-left has-icons-right">
          <input
            name="name"
            class="input"
            type="text"
            placeholder="Enter name here..."
          />
          <span
            style="font-size: 1em; color: #363636"
            class="icon is-small is-left"
          >
            <i class="fas fa-comment"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <label class="label">Email:</label>
        <p class="control has-icons-left has-icons-right">
          <input
            name="mail"
            class="input"
            type="email"
            placeholder="Enter email here..."
          />
          <span
            style="font-size: 1em; color: #363636"
            class="icon is-small is-left"
          >
            <i class="far fa-envelope"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <label class="label">Message:</label>
        <p class="control has-icons-left has-icons-right">
          <textarea
            name="comment"
            class="textarea"
            placeholder="Enter details here..."
          ></textarea>
          <span
            style="font-size: 1em; color: #363636"
            class="icon is-small is-right"
          >
            <i class="fas fa-info-circle"></i>
          </span>
        </p>
      </div>

      <div class="field is-grouped">
        <p class="control has-icons-left has-icons-right">
          <button type="submit" value="Submit" class="button is-dark">
            Contact us
          </button>
        </p>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
nav {
  background-color: rgb(44, 44, 44);
  a {
    font-weight: bold;
    color: #e0e0e0;
    &.button-hover-color {
      color: #919191;
    }
  }
}
.org-description {
  text-align: center;
}
.lightgrey {
  padding: 30px 30px;
  background-color: rgb(216, 216, 216) !important;
}
</style>