<template>
  <div class="go-border-box">
    <svg :width="width" :height="height">
      <path
        :fill="backgroundColor"
        :stroke="colors[0]"
        :d="`
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${width - 20} 10 L ${width - 5} 25
          L ${width - 5} ${height - 5} L 20 ${height - 5}
          L 5 ${height - 20} L 5 20
        `"
      />

      <path
        fill="transparent"
        stroke-w="3"
        stroke-linecap="round"
        stroke-dasharray="10, 5"
        :stroke="colors[0]"
        :d="`M 16 9 L 61 9`"
      />

      <path
        fill="transparent"
        :stroke="colors[1]"
        :d="`M 5 20 L 5 10 L 12 3  L 60 3 L 68 10`"
      />

      <path
        fill="transparent"
        :stroke="colors[1]"
        :d="`M ${width - 5} ${height - 30} L ${width - 5} ${height - 5} L ${width - 30} ${height - 5}`"
      />
    </svg>
  </div>
</template>

<script>
import globalMinix from '../../globalMinix'
export default {
  mixins: [globalMinix],
  data() {
    return {
      colors: ['#6586ec', '#2cf7fe'],
      backgroundColor: 'transparent'
    }
  },
  computed: {
    width() {
      return parseInt(this.componentData.style.width)
    },
    height() {
      return parseInt(this.componentData.style.height)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
