<template>
  <div id="login">
    <h1>Log in page</h1>
    <hr />

    <div class="fakeHeight">
      <div class="container border-bottom border-end shadow p-5 my-5">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-12 col-lg-6">
            <div class="form-floating">
              <input
                v-model="username"
                id="username"
                class="form-control"
                placeholder="username"
                type="text"
              />
              <label for="username">Username</label>
            </div>
            <div class="username-error">
              <p ref="usernameErrorRef">{{ usernameError }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-12 col-lg-6">
            <div class="form-floating">
              <input
                v-model="password"
                id="password"
                class="form-control"
                placeholder="Password"
                type="password"
              />
              <label for="password">Password</label>
            </div>
            <div class="password-error">
              <p ref="passwordErrorRef">{{ passwordError }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <button class="btn btn-success" @click="performLogin">
              Log in
            </button>
          </div>
          <div class="col-12">
            <p ref="loginErrorRef">{{ loginError }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-12 col-lg-6">
            <p>
              You don't have an Account?<span
                @click="goToRegister"
                class="text-success create"
              >
                Register here.</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      passwordError: "",
      usernameError: "",
      loginError: "",
      username: "user1",
      password: "userpass1",
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    goToRegister() {
      this.$router.push("/register");
    },
    performLogin() {
      this.usernameError = "";
      this.passwordError = "";
      this.loginError = "";

      if (!this.username) {
        this.usernameError = "Username is required";
        this.$refs.usernameErrorRef.classList.add("alert", "alert-danger");
      } else {
        this.$refs.usernameErrorRef.classList.remove("alert", "alert-danger");
        this.usernameError = "";
      }

      if (!this.password) {
        this.passwordError = "Password is required";
        this.$refs.passwordErrorRef.classList.add("alert", "alert-danger");
      } else {
        this.$refs.passwordErrorRef.classList.remove("alert", "alert-danger");
        this.passwordError = "";
      }

      if (this.usernameError == "" && this.passwordError == "") {
        let user = this.$store.state.users.find(
          (x) => x.username == this.username && this.password == this.password
        );

        if (!user) {
          this.loginError = "Wrong credentials.";
          return;
        }

        let localStorageItem = {
          username: user.username,
          role: user.role,
        };

        localStorage.setItem("user", JSON.stringify(localStorageItem));

        this.$store.commit("changeUser", localStorageItem);
        location.reload();
      }
    },
  },
};
</script>

<style>

span.create:hover {
  cursor: pointer;
  background-color: #f1f1f1;
  border-radius: 10px;
}
</style>