<template>
  <div id="registraion">
    <h1>Register</h1>
    <hr />
    <div class="container fakeHeight">
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-12 col-lg-6">
          <div class="form-floating">
            <input
              type="text"
              id="emailRegister"
              class="form-control mb-3"
              v-model="newUser.newEmail"
            />
            <label for="emailRegister">Email</label>
            <p ref="emailErrorRef">{{ emailError }}</p>
          </div>
          <div class="form-floating">
            <input
              type="text"
              id="userRegister"
              class="form-control mb-3"
              v-model="newUser.newUsername"
            />
            <label for="userRegister">Username</label>
            <p ref="usernameErrorRef">{{ usernameError }}</p>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              id="passRegister"
              class="form-control"
              v-model="newUser.newPassword"
            />
            <label for="passRegister">Password</label>
            <p ref="passwordErrorRef">{{ passwordError }}</p>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              id="passRegisterRe"
              class="form-control"
              v-model="newUser.newRePassword"
            />
            <label for="passRegisterRe">Re-enter password</label>
            <p ref="rePasswordErrorRef">{{ rePasswordError }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-12 col-lg-6 d-flex justify-content-end mt-3">
          <button @click="performRegistration" class="btn btn-outline-success">
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistraionView",
  data() {
    return {
      newUser: {
        newEmail: "",
        newUsername: "",
        newPassword: "",
        newRePassword: "",
        defaultRole: "user",
      },
      emailError: "",
      usernameError: "",
      passwordError: "",
      rePasswordError: "",
      errors: true,
    };
  },
  methods: {
    performRegistration() {
      this.emailError = "";
      this.usernameError = "";
      this.passwordError = "";
      this.rePasswordError = "";

      let errorList = [];

      if (!this.newUser.newEmail) {
        this.emailError = "Email is required";
        this.$refs.emailErrorRef.classList.add("alert", "alert-danger");
        errorList.push("emailError");
      } else {
        this.$refs.emailErrorRef.classList.remove("alert", "alert-danger");
      }
      if (!this.newUser.newUsername) {
        this.usernameError = "Username is required";
        this.$refs.usernameErrorRef.classList.add("alert", "alert-danger");
        errorList.push("usernameError");
      } else {
        this.$refs.usernameErrorRef.classList.remove("alert", "alert-danger");
      }
      if (!this.newUser.newPassword) {
        this.passwordError = "Password is required";
        this.$refs.passwordErrorRef.classList.add("alert", "alert-danger");
        errorList.push("passwordError");
      } else {
        this.$refs.passwordErrorRef.classList.remove("alert", "alert-danger");
      }
      if (this.newUser.newRePassword !== this.newUser.newPassword) {
        this.rePasswordError = "Passwords don't match";
        this.$refs.rePasswordErrorRef.classList.add("alert", "alert-danger");
        errorList.push("rePasswordError");
      } else {
        this.$refs.rePasswordErrorRef.classList.remove("alert", "alert-danger");
      }

      if (!errorList.length) {
        let userToAdd = {
          email: this.newUser.newEmail,
          username: this.newUser.newUsername,
          password: this.newUser.newPassword,
          role: this.newUser.defaultRole,
        };
        this.$store.dispatch("addUser", userToAdd);
        this.$router.push("/login");
        console.log(this.$store.state.users);
      }
    },
  },
};
</script>

<style>
</style>