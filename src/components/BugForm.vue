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

  <div style="border: 2px solid #363636" class="container is-fullhd">
    <div v-if="$auth.isAuthenticated.value" class="notification">
      <form @submit.prevent="addBug">
        <div class="field">
          <label class="label">Issue title:</label>
          <div class="control">
            <input
              required
              class="input"
              type="text"
              placeholder="Text input"
              v-model="title"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Issue details:</label>
          <div class="control">
            <textarea
              required
              class="textarea"
              placeholder="Textarea"
              v-model="details"
              label="Add Bug"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Priority</label>
          <div class="control">
            <div class="select">
              <select required v-model="priority">
                <option>Minor</option>
                <option>Major</option>
                <option>Critical</option>
                <option>Blocker</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button type="submit" value="submit" class="button is-dark">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div
    style="background-color: rgb(216, 216, 216) !important"
    v-if="!$auth.isAuthenticated.value"
    class="notification container is-fullhd"
  >
    <p>Please log in to add issues</p>
  </div>
</template>




<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      details: "",
      priority: "",
    };
  },
  methods: {
    addBug() {
      axios
        .post("http://localhost:3000/bug/add", {
          bug: {
            title: this.title,
            details: this.details,
            priority: this.priority,
          },
        })
        .then((response) => {
          this.message = response.data;
          console.log(this.message);
          console.log("sent");
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
    &.button-hover-color {
      color: #919191;
    }
  }
}
.notification {
  background-color: rgb(233, 233, 233) !important;
}
</style>
