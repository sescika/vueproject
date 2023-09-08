<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img src="favicon.ico" alt="logoImage"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse m-0" id="navbarNav">
        <ul class="navbar-nav ms-lg-auto">
          <li v-if="this.$store.getters.getRole != 'unauthorised'">
            <span class="text-light">Welcome, </span>
            <span class="text-success">{{
              this.$store.getters.getUsername
            }}</span>
          </li>
          <li
            class="nav-item ms-lg-3"
            v-for="(item, index) in navItems"
            :key="index"
            v-role="item.role"
          >
            <router-link :to="item.path">{{ item.text }}</router-link>
          </li>
        </ul>
        <button
          class="btn btn-outline-success ms-3"
          v-role="['admin', 'user']"
          @click="performLogout"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComponent",
  props: ["navItems"],
  methods: {
    performLogout() {
      this.$store.commit("changeUser", undefined);
      location.reload();
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}

a.navbar-brand {
  color: #42b983;
}

a.navbar-brand:hover {
  color: white;
}
</style>