<template>
  <Nav :navItems="navArray" />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Nav from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      navArray: [
        {
          text: "Home",
          path: "/",
          role: ["unauthorised", "user", "admin"],
        },
        {
          text: "Store",
          path: "/store",
          role: ["unauthorised", "user", "admin"],
        },
        {
          text: "Admin",
          path: "/admin",
          role: ["admin"],
        },

        {
          text: "Register",
          path: "/register",
          role: ["unauthorised"],
        },
        {
          text: "Cart",
          path: "/cart",
          role: ["admin", "user"],
        },
        {
          text: "Log in",
          path: "/login",
          role: ["unauthorised"],
        },
      ],
    };
  },
  created() {
    let user = localStorage.getItem("user");

    if (!user) {
      this.$store.commit("changeUser", undefined);
    }
    this.$store.commit("changeUser", JSON.parse(user));
  },
};
</script>

<style>
.fakeHeight {
  height: 700px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #eee;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  color: #2c3e50;
}
</style>
