<!--
 * @Author: 段本显
 * @FilePath: \appiron-ui\src\package\table\a-table.vue
 * @Date: 2021-12-14 09:37:36
 * @LastEditors: 段本显
 * @LastEditTime: 2021-12-16 11:47:25
 * @Email: duanbenxian@jianq.com
 * 如果有bug，那肯定不是我的锅，噜噜噜
-->
<template>
  <el-table :data="data" v-bind="$attrs">
    <el-table-column
      align="center"
      type="selection"
      width="50"
      v-if="showCheckBox"
      reserve-selection
    >
    </el-table-column>
    <el-table-column
      align="center"
      type="index"
      width="100"
      v-if="showIndex"
    ></el-table-column>
    <el-table-column
      :key="item.key"
      v-for="item in tableColumn"
      :label="item.label"
      v-bind="{
        minWidth: '80',
        ...item.attrs,
      }"
      :prop="item.key"
      show-overflow-tooltip
    >
      <template #default="{ row }">
        <slot :name="`${item.key}Col`" :row="row">
          <template v-if="$slots.default"></template>
          <template v-else>{{ row[item.key] }}</template>
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { tableProps } from "./table"
export default defineComponent({
  name: "ATable",
  props: tableProps,
})
</script>

<style scoped lang="scss"></style>
