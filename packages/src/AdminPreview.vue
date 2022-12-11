<template>
  <div class="preview-wrap">
    <slot />
    <div
      v-for="(item, index) in componentStore"
      :key="item.id"
      class="component-item"
      :style="item.style"
    >
      <component
        :is="item.component"
        :style="{ width: item.style.width, height: item.style.height }"
        :index="index"
        :componentData="item"
        :globalConfig="globalConfig"
        @echartsClick="data => $emit('echartsClick', data)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    componentStore: {
      type: Array,
      default: () => []
    },
    globalConfig: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      style: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
 .component-item {
    position: absolute;
  }
}
</style>
