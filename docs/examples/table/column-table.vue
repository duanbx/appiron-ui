<template>
  <a-table showIndex :data="data.data" :tableColumn="data.tableColumn">
    <template #nameCol> 自定义姓名 </template>
  </a-table>
</template>
<script lang="ts" setup>
import { reactive } from "vue"
const data = reactive({
  data: [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ],
  tableColumn: [
    { key: "date", label: "日期" },
    { key: "name", label: "姓名", slot: true },
    { key: "address", label: "地址" },
  ],
})
</script>
