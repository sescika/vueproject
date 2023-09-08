<template>
  <div class="popup p-2 shadow" v-if="isVisible">
    <div class="popup-content alert alert-success">
      <slot></slot>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PopupComponent",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    show() {
      this.isVisible = true;
      setTimeout(() => {
        this.hide();
      }, this.timeout);
    },
    hide() {
      this.isVisible = false;
    },
  },
  props: {
    timeout: {
      type: Number,
      default: 1000,
    },
  },
};
</script>
  
  <style scoped>

.popup {
  position: fixed;
  bottom: 10px;
  right: 10px;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.popup-content {
  text-align: center;
  margin: 0px;
}
</style>
  