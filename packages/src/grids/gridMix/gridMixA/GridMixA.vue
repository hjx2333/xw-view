<template>
  <div :key="stamp" class="grid-mix-wrap"
    :style="{
      'border-top': componentData.style.borderTop ? '1px solid #ccc' : 'none'
    }">
    <div class="grid-list" :style="{height: '20%', 'padding-bottom': 0}">
       <grids-content
          v-for="(item, index) in 4"
          :key="index"
          :componentData="componentData"
          :index="index"
          @gridMouseDown="gridMouseDown"
        />
    </div>
    <div class="grid-list" :style="{height: '30%', 'padding-bottom': 0}">
       <grids-content
          :key="4"
          :componentData="componentData"
          :index="4"
          @gridMouseDown="gridMouseDown"
        />
    </div>
     <div class="grid-list" :style="{height: '25%', 'padding-bottom': 0}">
       <grids-content
          v-for="(item, index) in 2"
          :key="index + 5"
          :componentData="componentData"
          :index="index + 5"
          @gridMouseDown="gridMouseDown"
        />
    </div>
     <div class="grid-list" :style="{height: '25%'}">
       <grids-content
          v-for="(item, index) in 2"
          :key="index + 7"
          :componentData="componentData"
          :index="index + 7"
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
.grid-list {
  border-bottom: none;
  &:last-of-type {
    border-bottom: 1px solid #ccc;
  }
}
</style>
