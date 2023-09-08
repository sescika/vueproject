export default {
  created: function (el, binding, vnode) {
    const role = binding.instance.$store.getters.getRole

    if (!binding.value.includes(role)) {
      vnode.el.style.display = 'none'
    }
  },
  updated: function (el, binding, vnode) {
    const role = binding.instance.$store.getters.getRole

    if (!binding.value.includes(role)) {
      vnode.el.style.display = 'none'
    } 
  },
};
