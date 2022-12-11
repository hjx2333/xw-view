<template>
  <div :key="stamp" class="grid-list">
    <div
      v-for="(item, index) in componentData.colspan"
      :key="index"
      class="grid-item"
      :style="setItemStyle(index)"
    >
      <component
        :is="getCurrentChild(index).component"
        v-if="getCurrentChild(index)"
        :style="{ width: getCurrentChild(index, 'width'), height: getCurrentChild(index, 'height') }"
        :componentData="getCurrentChild(index)"
        :globalConfig="globalConfig"
        @mousedown.native.stop="handleMousedown($event, getCurrentChild(index), index)"
      />
      <div v-else :data-id="componentData.id" :data-index="index" class="empty-contain">可放置组件</div>
    </div>
  </div>
</template>

<script>
import globalMinix from '../../globalMinix'
export default {
  mixins: [globalMinix],
  data() {
    return {
      stamp: +new Date()
    }
  },
  watch: {
    'componentData.style'() {
      this.getCurrentChild() && (this.stamp = +new Date())
    }
  },
  methods: {
    setItemStyle(index) {
      const { style, colspan } = this.componentData
      if (colspan === 2 && index === 0) {
        return { width: style.leftWidth, flex: 'none' }
      }
      return {}
    },

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
.grid-list {
  display: flex;
  padding: 10px;
  background-color: #ddd;
  border: 1px solid #fff;
  .grid-item {
    margin-right: 10px;
    background-color: #fff;
    flex: 1;
    &:last-of-type {
      margin-right: 0;
    }
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
