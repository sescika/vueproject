<template>
  <div id="home" class="my-3">
    <div class="container">
      <div class="row">
        <div class="col-12 my-5 p-3 shadow">
          <h1>Welcome to LpLap</h1>
          <p>Your Ultimate Destination for the Latest Laptops</p>
          <button @click="goToShop()" class="btn btn-success">Shop now</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-3 shadow">
          <img src="performance.png" alt="Performance Icon" class="img" />
          <h2>Unmatched Performance</h2>
          <p>
            Explore laptops with lightning-fast processors and ample RAM for
            seamless multitasking.
          </p>
        </div>
        <div class="col-12 mb-3 shadow">
          <img src="design.jpg" alt="Design Icon" class="img"/>
          <h2>Sleek and Modern Designs</h2>
          <p>
            Discover laptops that not only perform well but also look stylish
            and modern.
          </p>
        </div>
        <div class="col-12 mb-3 shadow">
          <img src="gaming.png" alt="Gaming Icon" class="img"/>
          <h2>Next-Level Gaming</h2>
          <p>
            Get the ultimate gaming experience with powerful GPUs and high
            refresh rate displays.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToShop() {
      this.$router.push("/store");
    },
  },
};
</script>

<style>
.img {
  width: 400px;
}
</style>
