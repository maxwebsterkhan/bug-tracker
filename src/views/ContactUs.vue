<template>
  <nav
    class="navbar container is-fullhd is-dark"
    role="navigation"
    aria-label="main navigation"
    style="padding: 8px 0"
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
  <div class="container is-fullhd">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <label class="label">Phone</label>
      <div class="control">
        <input class="input" type="tel" placeholder="Text input" />
      </div>
    </div>

    <div class="field">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <label class="label">Subject</label>
      <div class="control">
        <div class="select">
          <select>
            <option>Select option</option>
            <option>Bug</option>
            <option>Feedback</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-dark">Submit</button>
      </div>
      <div class="control">
        <button class="button is-dark">Cancel</button>
      </div>
    </div>
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
.container {
  margin-top: 20px;
  margin: 0 auto;
  padding: 1rem;
 
}

</style>