<template>
  <nav
    class="navbar container is-fullhd"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand"></div>
    <nav
      class="navbar container is-fullhd"
      role="navigation"
      aria-label="main navigation"
      style="
        background-color: #363636;
        border-left: 2px solid #363636;
        border-right: 2px solid #363636;
      "
    >
      <div class="navbar-brand"></div>
      <div style="background-colour: #363636" id="navbar" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field has-addons" v-if="$auth.isAuthenticated.value">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  v-model="search"
                  placeholder="Filter by title"
                />
              </div>
            </div>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div v-if="buttonAddForm" class="buttons">
                <button class="button is-dark">
                  <router-link to="/view" class="navbar-item"
                    >View Issues</router-link
                  >
                </button>
              </div>
              <div
                style="padding-right: 6px"
                v-else
                class="buttons navbar-item"
              >
                <button class="button is-dark">
                  <router-link to="/add" class="navbar-item"
                    >Add Issues</router-link
                  >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </nav>
  <div
    class="row container is-fullhd lightgrey"
    style="border: 2px solid #363636"
  >
    <div class="col-md-12 lightgrey" v-if="$auth.isAuthenticated.value">
      <section
        class="section lightgrey"
        style="border-bottom: 2px solid #363636"
      >
        <div class="container lightgrey">
          <h1 class="title">Uncompleted</h1>
          <h2 class="subtitle">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead class="thead-dark lightgrey">
                <tr>
                  <th align="center" width="200">Title</th>
                  <th align="center" width="200">Details</th>
                  <th align="center" width="200">Severity</th>
                  <th align="center" width="200">Complete</th>
                  <th align="center" width="200">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="lightgrey"
                  v-for="bug in filterUncompletedBugs"
                  :key="bug._id"
                >
                  <td align="center">{{ bug.title }}</td>
                  <td align="center">
                    <button
                      @click="isHidden = !isHidden"
                      class="button is-info"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <div class="modal is-active" v-if="isHidden">
                      <div class="modal-background"></div>
                      <div class="modal-card">
                        <header class="modal-card-head">
                          <p class="modal-card-title">{{ bug.title }}</p>
                          <button
                            class="delete"
                            @click="isHidden = !isHidden"
                            aria-label="close"
                          ></button>
                        </header>
                        <section class="modal-card-body">
                          {{ bug.details }}
                        </section>
                        <footer class="modal-card-foot">
                          <button @click="isHidden = !isHidden" class="button">
                            Close
                          </button>
                        </footer>
                      </div>
                    </div>
                  </td>
                  <td align="center">{{ bug.priority }}</td>
                  <td align="center">
                    <button
                      @click="completeBug(bug._id)"
                      class="button is-success"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-check"></i>
                      </span>
                    </button>
                  </td>
                  <td align="center">
                    <button
                      @click="deleteBugFromUncompleted(bug._id)"
                      class="button is-danger"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-times"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </h2>
        </div>
      </section>

      <section class="section lightgrey">
        <div class="container lightgrey">
          <h1 class="title">Completed</h1>
          <h2 class="subtitle">
            <table
              class="table is-striped lightgrey is-narrow is-hoverable is-fullwidth"
            >
              <thead class="thead-dark lightgrey">
                <tr>
                  <th align="center" width="200">Title</th>
                  <th align="center" width="200">Details</th>
                  <th align="center" width="200">Severity</th>
                  <th align="center" width="200">Uncomplete</th>
                  <th align="center" width="200">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bug in filterCompletedBugs" :key="bug._id">
                  <td align="center">
                    {{ bug.title }}
                  </td>
                  <td align="center">
                    <button
                      @click="isHidden = !isHidden"
                      class="button is-info"
                    >
                      <i class="fas fa-eye"></i>
                    </button>

                    <div class="modal is-active" v-if="isHidden">
                      <div class="modal-background"></div>
                      <div class="modal-card">
                        <header class="modal-card-head">
                          <p class="modal-card-title">{{ bug.title }}</p>
                          <button
                            class="delete"
                            @click="isHidden = !isHidden"
                            aria-label="close"
                          ></button>
                        </header>
                        <section class="modal-card-body">
                          {{ bug.details }}
                        </section>
                        <footer class="modal-card-foot">
                          <button @click="isHidden = !isHidden" class="button">
                            Close
                          </button>
                        </footer>
                      </div>
                    </div>
                  </td>

                  <td align="center">{{ bug.priority }}</td>
                  <td align="center">
                    <button
                      @click="uncompleteBug(bug._id)"
                      class="button is-warning"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-check"></i>
                      </span>
                    </button>
                  </td>
                  <td align="center">
                    <button
                      @click="deleteBugFromCompleted(bug._id)"
                      class="button is-danger"
                    >
                      <span class="icon is-small">
                        <i class="fas fa-times"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </h2>
        </div>
      </section>
    </div>
  </div>
  <div
    style="background-color: rgb(216, 216, 216) !important"
    v-if="!$auth.isAuthenticated.value"
    class="notification container"
  >
    <p>Please log in to view issues</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FontAwesomeIcon",
  data() {
    return {
      search: "",
      buttonAddForm: false,
      completedBugs: [],
      uncompletedBugs: [],
      isHidden: false,
    };
  },
  computed: {
    filterCompletedBugs() {
      return this.completedBugs.filter((bug) => {
        return bug.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    filterUncompletedBugs() {
      return this.uncompletedBugs.filter((bug) => {
        return bug.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  methods: {
    fetchData() {
      axios
        .get("http://localhost:3000/bug/uncompleted")
        .then((response) => (this.uncompletedBugs = response.data))
        .catch((error) => console.log(error));

      axios
        .get("http://localhost:3000/bug/completed")
        .then(
          (response) => (this.completedBugs = response.data),
          console.log(this.completedBugs)
        )
        .catch((error) => console.log(error));
    },

    deleteBugFromCompleted(bugID) {
      axios.delete("http://localhost:3000/bug/" + bugID).then((response) => {
        console.log(response.data);
        this.fetchData();
      });
    },
    deleteBugFromUncompleted(bugID) {
      axios.delete("http://localhost:3000/bug/" + bugID).then((response) => {
        console.log(response.data);
        this.fetchData();
      });
    },
    completeBug(bugID) {
      axios
        .post("http://localhost:3000/bug/complete/" + bugID)
        .then((response) => {
          console.log(response.data);
          this.fetchData();
        });
    },
    uncompleteBug(bugID) {
      axios
        .post("http://localhost:3000/bug/uncomplete/" + bugID)
        .then((response) => {
          console.log(response.data);
          this.fetchData();
        });
    },
  },

  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.content {
  background-color: rgb(209, 209, 209) !important;
}
.level {
  padding-top: 0.5rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid #4a4a4a;
}
.heading {
  font-size: 20px;
}
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
.lightgrey {
  background-color: rgb(245, 245, 245) !important;
}
</style>





    