<template>
  <div
    :key="stamp"
    class="grid-list"
    :style="{
      'border-top': componentData.style.borderTop ? '1px solid #ccc' : 'none'
    }"
  >
    <grids-content
      v-for="(item, index) in componentData.colspan"
      :key="index"
      :customStyle="setItemStyle(index)"
      :componentData="componentData"
      :index="index"
      @gridMouseDown="gridMouseDown"
    />
  </div>
</template>

<script>
import minix from '../minix'
import globalMinix from '../../globalMinix'
import GridsContent from '../components/GridsContent'
export default {
  components: { GridsContent },
  mixins: [globalMinix, minix],
  methods: {
    setItemStyle(index) {
      const { style, colspan } = this.componentData
      if (colspan === 2 && index === 0) {
        return { width: style.leftWidth, flex: 'none' }
      }
      return {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('@/assets/styles/grid.scss');
</style>
