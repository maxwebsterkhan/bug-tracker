 <template>
  <nav
    class="navbar container is-fullhd"
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
  <form>
    <div class="container is-fullhd">
      <div v-if="$auth.isAuthenticated.value" class="notification">
        <div class="field">
          <label class="label">Issue Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              v-model="name"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Textarea"
              v-model="message"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <label class="label">Priority</label>
          <div class="control">
            <div class="select">
              <select v-model="priority">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button @click.prevent="handleSubmitForm" class="button is-dark">
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-dark">Cancel</button>
          </div>
        </div>
      </div>
      <div v-if="!$auth.isAuthenticated.value" class="notification">
        <p>Please log in to add issues</p>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { uuid } from "vue-uuid";

export default {
  data() {
    return {
      bug: {
        issue: "",
        message: "",
        priority: "",
        uuid: uuid.v1(),
      },
    };
  },
  methods: {
    handleSumit() {
      axios
        .post("http://localhost:3000/todo/add", {
          todo: this.newTodo,
        })
        .then((response) => {
          this.message = response.data;
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
