<template>
  <el-space wrap direction="vertical" :size="30">
    <a-table
      :data="data.data"
      :tableColumn="data.tableColumn"
      showIndex
      v-model:checkList="data.checkList"
    ></a-table>
    <a-table
      :data="data.data"
      :tableColumn="data.tableColumn"
      showIndex
      v-model:checkList="data.checkObject"
    ></a-table>
  </el-space>
</template>
<script lang="ts" setup>
// import { ATable } from "appiron-ui"
import { reactive } from "vue"
const data = reactive({
  data: [
    {
      date: "2016-05-03",
      name: "Tom",
      id: 1,
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      id: 2,
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      id: 3,
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      id: 4,
      address: "No. 189, Grove St, Los Angeles",
    },
  ],
  tableColumn: [
    { key: "date", label: "日期" },
    { key: "name", label: "姓名" },
    { key: "address", label: "地址" },
  ],
  checkList: [
    {
      date: "2016-05-04",
      name: "Tom",
      id: 3,
      address: "No. 189, Grove St, Los Angeles",
    },
  ],
  checkObject: {
    date: "2016-05-04",
    name: "Tom",
    id: 3,
    address: "No. 189, Grove St, Los Angeles",
  },
})
</script>
