<template>
  <div class="grid-item" :style="customStyle">
    <component
      :is="getCurrentChild(index).component"
      v-if="getCurrentChild(index)"
      :style="{
        width: getCurrentChild(index, 'width'),
        height: getCurrentChild(index, 'height')
      }"
      :componentData="getCurrentChild(index)"
      :globalConfig="globalConfig"
      @mousedown.native.stop="
        handleMousedown($event, getCurrentChild(index), index)
      "
    />
    <div
      v-else
      :data-id="componentData.id"
      :data-index="index"
      class="empty-contain"
    >
      可放置组件
    </div>
  </div>
</template>

<script>
import { getGlobalConfig } from '@/utils/config'
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    componentData: {
      type: Object,
      default: () => {}
    },
    customStyle: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      globalConfig: getGlobalConfig()
    }
  },
  methods: {
    handleMousedown(e, item, index) {
      e.preventDefault()
      e.stopPropagation()

      this.$emit('gridMouseDown', item, index)
    },

    getCurrentChild(index, type) {
      const child = this.componentData.children[index] || ''
      return type ? child.style[type] : child
    }
  }
}
</script>

<style lang="scss" scoped>
.grid-item {
  background-color: #fff;
  flex: 1;
  padding: 10px;
  border-right: 1px solid #ccc;
  &:last-of-type {
    border-right: none;
  }

  .empty-contain {
    border-radius: 4px;
    border: 2px dashed #ccc;
    text-align: center;
    padding-top: 30px;
    height: 100%;
  }
}
</style>
