<template>
  <div id="admin">
    <div v-if="showModal">
      <Modal @close="toggleModal" :idProp="currentId" />
    </div>
    <h1>Admin page</h1>
    <hr />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="input-group mb-3">
            <input
              class="form-control"
              type="text"
              v-model="keyword"
              placeholder="Search"
            />
          </div>
          <table
            v-if="getNonDeletedProducts.length"
            class="table table-dark table-striped table-hover"
          >
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price (RSD)</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, index) in getNonDeletedProducts"
                :key="row.proizvodId"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ row.nazivProizvod }}</td>
                <td>{{ row.trenutnaCena }}</td>
                <td>
                  <img
                    class="preview-img"
                    :src="'https://lpstore47.000webhostapp.com/' + row.lokacija"
                    :alt="row.nazivSlika"
                  />
                </td>
                <td>
                  <button
                    @click="toggleModal(row.proizvodId)"
                    class="btn btn-outline-warning"
                  >
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </td>
                <td>
                  <button
                    @click="deleteProduct(row.proizvodId)"
                    class="btn btn-outline-danger"
                  >
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-else>
            <h4 class="alert alert-warning">
              There are no available products.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AdminView",
  data() {
    return {
      keyword: "",
      showModal: false,
      currentId: 1,
    };
  },
  methods: {
    toggleModal(id) {
      this.showModal = !this.showModal;
      this.currentId = id;
    },
    deleteProduct(id) {
      this.$store.commit("deleteProduct", id);
    },
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
.preview-img {
  width: 50px;
}
</style>