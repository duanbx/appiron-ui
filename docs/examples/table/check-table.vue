<template>
  <a-table
    :data="data.data"
    :tableColumn="data.tableColumn"
    showCheckBox
    showIndex
  ></a-table>
</template>
<script lang="ts" setup>
import { ATable } from "appiron-ui"
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
    { key: "name", label: "姓名" },
    { key: "address", label: "地址" },
  ],
})
</script>
