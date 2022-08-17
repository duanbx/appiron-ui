<!--
 * @Author: 段本显
 * @FilePath: \appiron-ui\src\package\table-popover\a-table-popover.vue
 * @Date: 2021-12-15 11:54:02
 * @LastEditors: 段本显
 * @LastEditTime: 2021-12-16 13:41:22
 * @Email: duanbenxian@jianq.com
 * 如果有bug，那肯定不是我的锅，噜噜噜
-->
<template>
  <el-popover :placement="placement" trigger="click">
    <template #reference>
      <slot></slot>
    </template>
    <el-checkbox
      v-model="allColumnsSelected"
      :indeterminate="allColumnsSelectedIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </el-checkbox>
    <el-checkbox-group v-model="checkList" @change="change">
      <div
        v-for="(item, index) in tableColumnCopy"
        :key="item.key"
        draggable="true"
        @drop="drop($event, index)"
        @dragover="dragover($event)"
        @dragstart="dragstart(index)"
      >
        <el-checkbox :label="item">
          <span class="checkbox">{{ item.label }}</span>
        </el-checkbox>
      </div>
    </el-checkbox-group>
  </el-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { tablePopoverProps } from "./table-popover"
export default defineComponent({
  props: tablePopoverProps,
  data() {
    return {
      dragIndex: -1,
      enterIndex: -1,
      tableColumnCopy: JSON.parse(JSON.stringify(this.tableColumn)),
    }
  },
  computed: {
    checkList: {
      get() {
        const checkKey = this.tableColumn.map((el) => el.key)
        return this.tableColumnCopy.filter((el) => checkKey.includes(el.key))
      },
      set(list) {
        return list
      },
    },
    allColumnsSelected: {
      get() {
        return this.checkList.length === this.tableColumnCopy.length
      },
      set(flag) {
        return flag
      },
    },
    allColumnsSelectedIndeterminate() {
      return (
        this.checkList.length &&
        this.checkList.length < this.tableColumnCopy.length
      )
    },
  },
  methods: {
    change(_list) {
      const checkKey = _list.map((el) => el.key)
      const list = this.tableColumnCopy.filter((el) =>
        checkKey.includes(el.key)
      )
      this.$emit("update:tableColumn", list)
    },
    handleCheckAllChange(checkAll) {
      if (checkAll) {
        this.change(this.tableColumnCopy)
      } else {
        this.change([])
      }
    },
    dragstart(index) {
      this.dragIndex = index
    },
    async drop(e, index) {
      e.preventDefault()
      // 避免源对象触发自身的dragenter事件
      if (this.dragIndex !== index) {
        this.enterIndex = index
        const tempItem = this.tableColumnCopy[this.enterIndex]
        this.tableColumnCopy[this.enterIndex] =
          this.tableColumnCopy[this.dragIndex]
        this.change(this.tableColumnCopy)
        await this.$nextTick()
        this.tableColumnCopy[this.dragIndex] = tempItem
        this.change(this.tableColumnCopy)
      }
    },
    dragover(e) {
      e.preventDefault()
    },
  },
})
</script>
