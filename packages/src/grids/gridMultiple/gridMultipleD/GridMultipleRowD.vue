<template>
  <div
    :key="stamp"
    class="grid-list"
    :style="{
      'border-top': componentData.style.borderTop ? '1px solid #ccc' : 'none'
    }"
  >
    <div class="grid-sidebar">
      <grids-content
        :index="0"
        :componentData="componentData"
        @gridMouseDown="gridMouseDown"
      />
      <grids-content
        :index="1"
        :componentData="componentData"
        @gridMouseDown="gridMouseDown"
      />
    </div>
    <grids-content
      :index="2"
      :customStyle="{ flex: 'none', width: componentData.style.contentWidth }"
      :componentData="componentData"
      @gridMouseDown="gridMouseDown"
    />
    <div class="grid-sidebar">
      <grids-content
        :index="3"
        :componentData="componentData"
        @gridMouseDown="gridMouseDown"
      />
      <grids-content
        :index="4"
        :componentData="componentData"
        @gridMouseDown="gridMouseDown"
      />
    </div>
  </div>
</template>

<script>
import GridsContent from '../../components/GridsContent'
import minix from '../../minix'
import globalMinix from '../../../globalMinix'
export default {
  components: { GridsContent },
  mixins: [globalMinix, minix]
}
</script>

<style lang="scss" scoped>
@import url('@/assets/styles/grid.scss');
.grid-sidebar {
  flex: 1;
  .grid-item {
    height: 50%;
    &:last-of-type {
      border-right: 1px solid #ccc;
      border-top: 1px solid #ccc;
    }
  }
}
</style>
