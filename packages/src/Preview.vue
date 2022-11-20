<template>
  <div class="preview-wrap">
    <div ref="preview-scale">
      <div class="preview-contain" :style="style">
        <slot />
        <div v-for="(item, index) in componentStore" :key="item.id" class="component-item" :style="item.style">
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
    </div>
  </div>
</template>

<script>
import { setPreviewScale } from '../utils/utils'
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
  },
  mounted() {
    this.init()

    window.addEventListener('resize', this.init)
  },
  destroyed() {
    window.removeEventListener('resize', this.init)
  },
  methods: {
    init() {
      const { width, height } = this.globalConfig.editor
      this.style = {
        width: `${width}px`,
        height: `${height}px`
      }

      setPreviewScale(this.$refs['preview-scale'], this.globalConfig.editor)
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
    background: url('~@/assets/images/bg.png')no-repeat center center;

    .component-item {
      position: absolute;
    }
  }
}
</style>
