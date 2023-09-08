<template>
  <div class="store">
    <h1>Store</h1>
    <hr />
    <div class="container">
      <div class="row mb-3">
        <div class="col-12 col-md-6 col-lg-4">
          <div class="input-group shadow">
            <input
              class="form-control"
              type="text"
              placeholder="Search "
              ref="search"
              v-model="keyword"
            />
            <button @click="searchProducts" class="btn btn-success">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div
          v-if="this.$store.getters.getRole == 'unauthorised'"
          class="col-12 col-md-6 col-lg-8"
        >
          <p>
            <span
              @click="goToShop"
              class="text-dark bg-warning rounded p-2 click"
              >Log in</span
            >
            to add items to the cart.
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="p in getNonDeletedProducts"
          :key="p.proizvodId"
        >
          <div class="card card-lp mb-md-3 shadow">
            <img
              :src="'https://lpstore47.000webhostapp.com/' + p.lokacija"
              :alt="p.nazivSlika"
              class="card-img-top"
            />
            <hr />
            <div class="card-body">
              <h4 class="card-text">
                {{ p.nazivProizvod }}
              </h4>
              <hr />
              <div
                class="card-footer d-flex justify-content-between align-items-center"
              >
                <button
                  @click="addToCart(p.proizvodId)"
                  v-role="['admin', 'user']"
                  class="btn btn-outline-success"
                >
                  Add <i class="fa-solid fa-cart-plus"></i>
                </button>
                <p class="card-text text-end fw-bold">
                  {{ p.trenutnaCena }} RSD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup ref="popup" :success="true">
        <p>Product added to cart.</p>
      </Popup>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StoreView",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    addToCart(id) {
      this.$store.commit("addItemToCart", id);
      this.showPopup()

    },
    goToShop() {
      this.$router.push("/login");
    },
    showPopup() {
      this.$refs.popup.show();
    }
  },
  created() {
    this.$store.dispatch("getAllProducts");
  },
  computed: {
    ...mapGetters(["getNonDeletedProducts"]),
  },
  watch: {
    keyword: function () {
      this.$store.dispatch("changeKeyword", this.keyword);
    },
  },
};
</script>

<style>
.card {
  min-height: 600px;
  overflow: hidden;
}

span.click:hover {
  cursor: pointer;
}
</style>