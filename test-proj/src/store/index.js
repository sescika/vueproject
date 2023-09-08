import { createStore } from "vuex";
import axios from "axios";
import users from "./users.json";

export default createStore({
  state: {
    productsArray: [{}],
    cart: [],
    user: {
      username: "guest",
      role: "unauthorised",
    },
    users: users,
    searchObject: {
      keyword: null,
    },
    deletedProducts: [],
  },
  getters: {
    getNavItems(state) {
      return state.navigation;
    },
    getProducts(state) {
      return state.productsArray;
    },
    getUsername(state) {
      return state.user.username;
    },
    getRole(state) {
      return state.user.role;
    },
    getAllUsers(state) {
      return state.users;
    },
    getAllProducts(state) {
      if (state.searchObject.keyword) {
        return state.productsArray.filter((x) => {
          return x.nazivProizvod
            .toLowerCase()
            .includes(state.searchObject.keyword.toLowerCase().trim());
        });
      }
      return state.productsArray;
    },
    getNonDeletedProducts(state, getters) {
      return getters.getAllProducts.filter(
        (x) => !state.deletedProducts.includes(x.proizvodId)
      );
    },
    getCartItems(state) {
      let arrItems = state.productsArray.filter((x) =>
        state.cart.includes(x.proizvodId)
      );

      return arrItems.map((x) => {
        return {
          id: x.proizvodId,
          name: x.nazivProizvod,
          imgUrl: x.lokacija,
          imgAlt: x.nazivSlika,
          price: x.trenutnaCena,
          quantity: 1,
        };
      });
    },
  },
  mutations: {
    changeUser(state, newUser) {
      if (!newUser) {
        state.user.username = "guest";
        state.user.role = "unauthorised";
        localStorage.removeItem("user");
        console.log(state.user.role);
        return;
      }
      state.user.username = newUser.username;
      state.user.role = newUser.role;
      console.log(state.user.role);
    },
    changeKeyword(state, newKeyword) {
      state.searchObject.keyword = newKeyword;
    },
    setProductsArray(state, productsArray) {
      state.productsArray = productsArray;
    },
    editProduct(state, newProductObj) {
      var obj = state.productsArray.find(
        (x) => x.proizvodId == newProductObj.id
      );
      obj.nazivProizvod = newProductObj.name;
      obj.trenutnaCena = newProductObj.price;
      obj.lokacija = newProductObj.imageUrl;
    },
    deleteProduct(state, id) {
      state.deletedProducts.push(id);
    },
    addItemToCart(state, id) {
      if (!state.cart.includes(id)) {
        state.cart.unshift(id);
      }
    },

    removeItemFromCart(state, id) {
      state.cart = state.cart.filter((x) => !x.includes(id));
    },

    addUser(state, newUser) {
      state.users.push(newUser);
    },
  },
  actions: {
    changeKeyword(context, keyword) {
      context.commit("changeKeyword", keyword);
    },
    async getAllProducts({ commit }) {
      axios
        .get("https://lpstore47.000webhostapp.com/models/dohvati-proizvode.php")
        .then((response) => {
          if (!localStorage.getItem("products")) {
            localStorage.setItem("products", JSON.stringify(response.data));
          }
          commit("setProductsArray", response.data);
        })
        .catch((response) => {
          console.log(response);
        });
    },
    changeUser({ commit }, newValue) {
      commit("changeUser", newValue);
    },
    addUser({ commit }, newUser) {
      commit("addUser", newUser);
    },
  },
  modules: {},
});
