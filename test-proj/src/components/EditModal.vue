<template>
  <div class="modal">
    <div class="modal-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="text"
                readonly
                class="form-control"
                placeholder="1"
                id="idProd"
                :value="id"
              />
              <label for="idProd">ID: (readonly)</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Price"
                v-model="name"
                id="editName"
              />
              <label for="editName">Name:</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="number"
                step="100"
                class="form-control"
                placeholder="Price"
                v-model="price"
                id="editPrice"
              />
              <label for="editPrice">Price:</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Price"
                v-model="imageUrl"
                id="editImageUrl"
              />
              <label for="editImageUrl">Image url:</label>
            </div>
          </div>
          <div class="col-12 d-flex justify-content-end">
            <button @click="edit" class="btn btn-success me-1">Save</button>
            <button @click="closeModal" class="btn btn-outline-secondary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-overlay" @click.self="closeModal"></div>
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
export default {
  name: "EditModal",
  props: ["idProp"],
  data() {
    return {
      imageUrl: "",
      price: 0,
      name: "",
      id: 0,
    };
  },
  mounted() {
    this.id = this.idProp;
    let baseUrl = "https://lpstore47.000webhostapp.com/";

    console.log(this.id);

    if (this.idProp) {
      let productToEdit = this.getAllProducts.filter(
        (x) => x.proizvodId == this.id
      )[0];

      this.imageUrl = productToEdit.lokacija;
      this.price = productToEdit.trenutnaCena;
      this.name = productToEdit.nazivProizvod;
    }
  },
  computed: {
    ...mapGetters(["getAllProducts"]),
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    edit() {
      this.$store.commit("editProduct", {
        id: this.id,
        name: this.name,
        price: this.price,
        imageUrl: this.imageUrl,
      });
    },
  },
};
</script>

  <style scoped>
.modal {
  color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  width: 1000px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
}
</style>