<template>
  <div class="xw-title-wrap">
    <img src="@/assets/images/subTitleIcon.png">
    <div class="xw-title">{{ componentData.store.title }}</div>
    <img src="@/assets/images/subTitleIcon.png" class="right-icon">
  </div>
</template>

<script>
import globalMinix from '../../globalMinix'
export default {
  name: 'SubTitle',
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
  display: flex;
  justify-content: center;
  align-items: center;
  .right-icon {
    transform: rotate(180deg);
  }
  .xw-title {
    font-size: 26px;
    font-weight: 900;
    letter-spacing: 6px;
    padding: 0 12px;
    background: linear-gradient(92deg,#0072ff,#00eaff 48.8525390625%,#01aaff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
}
</style>
