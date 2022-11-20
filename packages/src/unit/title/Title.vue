<template>
  <div class="xw-title-wrap">
    <div class="xw-title">{{ componentData.store.title }}</div>
  </div>
</template>

<script>
import globalMinix from '../../globalMinix'
export default {
  name: 'Table',
  mixins: [globalMinix],
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style lang="scss" scoped>
.xw-title-wrap {
  background: url('~@/assets/images/titleIcon.png')no-repeat center center;
  display: flex;
  justify-content: center;
  align-items: center;
  .xw-title {
    font-size: 38px;
    font-weight: 900;
    letter-spacing: 6px;
    width: 100%;
    background: linear-gradient(92deg,#0072ff,#00eaff 48.8525390625%,#01aaff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}
</style>
