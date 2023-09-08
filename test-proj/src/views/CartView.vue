<template>
  <div id="cart">
    <h1>Cart</h1>
    <hr />

    <div class="container fakeHeight">
      <div class="row">
        <div class="col-12">
          <table
            v-if="getCartItems.length"
            class="table table-striped table-dark"
          >
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Img</th>
                <th>Quantity</th>
                <th>Price</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, index) in getCartItems" :key="p.id">
                <td>{{ index + 1 }}</td>
                <td>{{ p.name }}</td>
                <td>
                  <img
                    class="preview-img"
                    :src="'https://lpstore47.000webhostapp.com/' + p.imgUrl"
                    :alt="p.imgAlt"
                  />
                </td>
                <td>
                  <button
                    @click="decrease(p.id)"
                    class="btn btn-outline-danger"
                  >
                    -
                  </button>
                  {{ p.quantity }}
                  <button
                    @click="increase(p.id)"
                    class="btn btn-outline-success"
                  >
                    +
                  </button>
                </td>
                <td>{{ p.price * p.quantity }} RSD</td>
                <td>
                  <button
                    class="btn btn-outline-danger"
                    @click="removeItem(p.id)"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else>
            <h4 class="alert alert-warning">There are no items in cart.</h4>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartView",
  computed: {
    ...mapGetters(["getCartItems", "getCart"]),
  },
  data() {
    return {
      totalPrice: 0,
    };
  },
  methods: {
    increase(id) {
      let item = this.getCartItems.filter((x) => x.id == id);

      item[0].quantity++;
      this.$forceUpdate();
    },
    decrease(id) {
      let item = this.getCartItems.filter((x) => x.id == id);

      if (item[0].quantity <= 1) {
        return;
      }

      item[0].quantity--;
      this.$forceUpdate();
    },
    removeItem(id) {
      this.$store.commit("removeItemFromCart", id);
    },
  },
};
</script>

<style>
.preview-img {
  width: 50px;
}
</style>