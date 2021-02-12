<template>
  <modal :data="bug" v-if="modalVisible" @close="modalVisible = !modalVisible"
    ><template #title>{{ bug.title }}</template
    ><template #details>{{ bug.details }}</template>
    <template #severity>{{ bug.severity }}</template
    ><template #author>{{ bug.author }}</template></modal
  >
  <edit-modal
    :data="bug"
    v-if="editModalVisible"
    @submit="updateBug(bug._id)"
    @close="editModalVisible = !editModalVisible"
  >
    <template #title>
      <div class="control">
        <p class="modal-card-title">New title:</p>
        <br />
        <input
          required
          class="input"
          type="text"
          :placeholder="bug.title"
          v-model.trim="title"
        /></div></template
    ><template #details>
      <div class="field">
        <label class="label">New Bug Details:</label>
        <div class="control">
          <textarea
            required
            class="textarea"
            :placeholder="bug.details"
            v-model.trim="details"
            label="Add Bug"
          ></textarea>
        </div></div
    ></template>
    <template #severity>
      <div class="field">
        <label class="label">Change Severity</label>
        <div class="control">
          <div class="select">
            <select required v-model.trim="severity">
              <option>Minor</option>
              <option>Major</option>
              <option>Critical</option>
              <option>Blocker</option>
            </select>
          </div>
        </div>
      </div></template
    ><template #author>
      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input
            required
            class="input"
            type="text"
            :placeholder="bug.author"
            v-model.trim="author"
          />
        </div></div
    ></template>
  </edit-modal>

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
          <h1 style="padding-bottom: 3rem; margin: 0 auto" class="title">
            Uncompleted
          </h1>
          <h2 class="subtitle">
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
              <thead class="thead-dark lightgrey">
                <tr>
                  <th align="center" width="200">Title</th>
                  <th align="center" width="200">Details</th>
                  <th align="center" width="200">Severity</th>
                  <th align="center" width="200">Author</th>
                  <th align="center" width="200">Move To Completed</th>
                  <th align="center" width="200">Edit</th>
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
                    <button @click="openModal(bug)" class="button is-info">
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>
                  <td :class="bug.severity" align="center">
                    {{ bug.severity }}
                  </td>
                  <td align="center">{{ bug.author }}</td>
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
                    <button @click="openEditModal(bug)" class="button">
                      <span class="icon is-small">
                        <i class="fas fa-edit"></i>
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
          <h1 style="padding-bottom: 3rem; margin: 0 auto" class="title">
            Completed
          </h1>
          <h2 class="subtitle">
            <table
              class="table is-striped lightgrey is-narrow is-hoverable is-fullwidth"
            >
              <thead class="thead-dark lightgrey">
                <tr>
                  <th align="center" width="200">Title</th>
                  <th align="center" width="200">Details</th>
                  <th align="center" width="200">Severity</th>
                  <th align="center" width="200">Author</th>
                  <th align="center" width="200">Move To Uncompleted</th>
                  <th align="center" width="200">Edit</th>
                  <th align="center" width="200">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bug in filterCompletedBugs" :key="bug._id">
                  <td align="center">
                    {{ bug.title }}
                  </td>
                  <td align="center">
                    <button @click="openModal(bug)" class="button is-info">
                      <i class="fas fa-eye"></i>
                    </button>
                  </td>

                  <td :class="bug.severity" align="center">
                    {{ bug.severity }}
                  </td>
                  <td align="center">{{ bug.author }}</td>
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
                    <button @click="openEditModal(bug)" class="button">
                      <span class="icon is-small">
                        <i class="fas fa-edit"></i>
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
import Modal from "./Partials/Modal";
import EditModal from "./Partials/EditModal";

export default {
  components: { Modal, EditModal },
  data() {
    return {
      search: "",
      buttonAddForm: false,
      completedBugs: [],
      uncompletedBugs: [],
      modalVisible: false,
      editModalVisible: false,
      modalData: null,
      title: "",
      details: "",
      severity: "",
      author: "",
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
    openModal(bug) {
      this.bug = bug;
      this.modalVisible = true;
    },
    openEditModal(bug) {
      this.bug = bug;
      this.editModalVisible = true;
    },

    updateBug(bugID) {
      axios
        .put("http://localhost:3000/bug/update/" + bugID, {
          bug: {
            title: this.title,
            details: this.details,
            severity: this.severity,
            author: this.author,
          },
        })
        .then((response) => {
          this.message = response.data;
          this.fetchUncompleted();
          this.fetchCompleted();
          this.editModalVisible = false;
          this.title = "";
          this.details = "";
          this.severity = "";
          this.author = "";
          console.log(this.message);
          console.log("updated");
        });
    },

    fetchCompleted() {
      axios
        .get("http://localhost:3000/bug/uncompleted")
        .then((response) => (this.uncompletedBugs = response.data))
        .catch((error) => console.log(error));
    },

    fetchUncompleted() {
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
        this.fetchCompleted();
        this.fetchUncompleted();
      });
    },
    deleteBugFromUncompleted(bugID) {
      axios.delete("http://localhost:3000/bug/" + bugID).then((response) => {
        console.log(response.data);
        this.fetchUncompleted();
        this.fetchCompleted();
      });
    },
    completeBug(bugID) {
      axios
        .post("http://localhost:3000/bug/complete/" + bugID)
        .then((response) => {
          this.fetchUncompleted();
          this.fetchCompleted();
          console.log(response.data);
        });
    },
    uncompleteBug(bugID) {
      axios
        .post("http://localhost:3000/bug/uncomplete/" + bugID)
        .then((response) => {
          this.fetchCompleted();
          this.fetchUncompleted();
          console.log(response.data);
        });
    },
  },

  created() {
    this.fetchCompleted();
    this.fetchUncompleted();
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
.Minor {
  color: green;
  font-weight: bold;
}
.Major {
  color: orange;
  font-weight: bold;
}
.Critical {
  color: red;
  font-weight: bold;
}
.Blocker {
  color: purple;
  font-weight: bold;
}
</style>





    