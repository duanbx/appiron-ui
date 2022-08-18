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
  <el-table
    :data="data"
    v-bind="$attrs"
    @selection-change="handleSelectionChange"
    @current-change="handleSelectionChange"
    :row-key="rowKey"
    ref="multipleTableRef"
  >
    <template v-if="checkList">
      <el-table-column
        align="center"
        type="selection"
        width="50"
        v-if="isMultipleSelect"
        :reserve-selection="reserveSelection"
      >
      </el-table-column>
      <el-table-column align="center" width="50" v-else label="#">
        <template #default="{ row }">
          <el-radio
            class="table-radio"
            :model-value="checkList[rowKey]"
            :label="row[rowKey]"
          ></el-radio>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      label="#"
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
import { ElTable } from "element-plus"
import { defineComponent } from "vue"
import { tableProps } from "./table"
export default defineComponent({
  name: "ATable",
  props: tableProps,
  data() {
    return {
      load: false,
    }
  },
  computed: {
    isMultipleSelect() {
      return Array.isArray(this.checkList)
    },
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val, this.checkList)

      if (this.load) {
        if (Array.isArray(this.checkList)) {
          if (Array.isArray(val)) {
            // 不能之前修改props checkList copy一份
            let copyCheckList = [...this.checkList]
            const checkKeys = copyCheckList.map((el) => el[this.rowKey])
            const valKeys = val.map((el: any) => el[this.rowKey])
            // 过去当前页所有之前已经勾选的数据
            const preCueerntPageSelect = this.data.filter((el: any) =>
              checkKeys.includes(el[this.rowKey])
            )
            const preCueerntPageSelectKeys = preCueerntPageSelect.map(
              (el: any) => el[this.rowKey]
            )
            // 找出已经勾选但是不存在preCueerntPageSelect的项，这种就是新增选中的
            val.forEach((el) => {
              const tempIndex = preCueerntPageSelectKeys.indexOf(
                el[this.rowKey]
              )
              if (tempIndex === -1 && !checkKeys.includes(el[this.rowKey]))
                copyCheckList.push(el)
            })
            // 找出之前勾选但是不存在当前勾选的项，这种就是后面取消勾选的
            const deleteKeys = preCueerntPageSelect
              .filter((el: any) => !valKeys.includes(el[this.rowKey]))
              .map((el: any) => el[this.rowKey])

            copyCheckList = copyCheckList.filter(
              (el) => !deleteKeys.includes(el[this.rowKey])
            )
            this.$emit("update:checkList", copyCheckList)
          }
        } else {
          this.$emit("update:checkList", val)
        }
      }
    },
    // 设置默认勾选
    setDefaultCheck() {
      const multipleTableRef = this.$refs.multipleTableRef as InstanceType<
        typeof ElTable
      >
      if (Array.isArray(this.checkList)) {
        const checkKeys = this.checkList.map((el) => el[this.rowKey])
        this.data.forEach((row: any) => {
          multipleTableRef!.toggleRowSelection(
            row,
            checkKeys.includes(row[this.rowKey])
          )
        })
      }
    },
  },
  mounted() {
    this.load = true
    this.setDefaultCheck()
  },
})
</script>
