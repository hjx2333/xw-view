<template>
  <a-table
    ref="ele"
    :columns="store.columns"
    :data-source="tableData"
    :pagination="store.pagination"
    :rowKey="store.rowKey"
    :scroll="{ y: scrollY }"
  />
</template>

<script>
import { Table } from 'ant-design-vue'
import 'ant-design-vue/lib/table/style/css'
import globalMinix from '../../globalMinix'
export default {
  name: 'Table',
  mixins: [globalMinix],
  components: { ATable: Table },
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.init()
  },
  computed: {
    store() {
      return this.componentData.store
    },
    scrollY() {
      return parseInt(this.componentData.style.height) - 60
    }
  },
  methods: {
    async init() {
      this.tableData = await this.judgeDataSource()
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.ant-table) {
  color: #fff;
  font-size: 16px;
  .ant-table-thead > tr > th {
    background-color: #0072ff;
    border-bottom: none;
    color: #fff;
  }
  .ant-table-thead
    > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-tbody
    > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-thead
    > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td,
  .ant-table-tbody
    > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
    > td {
    background-color: #01aaff;
  }
  .ant-table-row td {
    background: #000;
  }
}
</style>
