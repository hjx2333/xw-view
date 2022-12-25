export default {
  data() {
    return {
      stamp: +new Date()
    }
  },
  watch: {
    'componentData.style.height': {
      handler() {
        this.getCurrentChild(0) && (this.stamp = +new Date())
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    getCurrentChild(index, type) {
      const child = this.componentData.children[index] || ''
      return type ? child.style[type] : child
    },

    gridMouseDown(item, index) {
      this.$emit('gridMouseDown', item, index)
    }
  }
}
