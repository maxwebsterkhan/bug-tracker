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
    >
      <div class="navbar-brand"></div>
      <div id="navbar" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field has-addons" v-if="$auth.isAuthenticated.value">
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Search an issue"
                />
              </div>
              <div class="control">
                <a class="button is-dark"> Search </a>
              </div>
            </div>
          </div>
          <div class="navbar-item">
            <div v-if="buttonAddForm" @click="toggleButton" class="buttons">
              <button class="button is-dark">
                <router-link to="/view" class="navbar-item"
                  >View Issues</router-link
                >
              </button>
            </div>
            <div v-else class="buttons" @click="toggleButton">
              <button class="button is-dark">
                <router-link to="/add" class="navbar-item"
                  >Add Issues</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </nav>
  <div class="row container is-fullhd">
    <div class="col-md-12" v-if="$auth.isAuthenticated.value">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in Students" :key="student._id">
            <td>{{ student.name }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: student._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteStudent(student._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="!$auth.isAuthenticated.value" class="notification">
      <p>Please log in to view issues</p>
    </div>
  </div>
</template>


<style scoped>
.content {
  background-color: rgb(196, 196, 196);
}
.level {
  padding-top: 0.5rem;
  padding-bottom: 0.1rem;
  border-bottom: 1px solid black;
}
.heading {
  font-size: 20px;
}
nav {
  background-color: rgb(44, 44, 44);
}
a {
  font-weight: bold;
  color: #e0e0e0;

  &.router-link-exact-active {
    color: #919191;
  }
}
</style>




  
     