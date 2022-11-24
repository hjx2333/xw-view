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
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;

  .preview-contain {
    position: relative;
    // background: url('~@/assets/images/bg.png')no-repeat center center;

    .component-item {
      position: absolute;
    }
  }
}
</style>
