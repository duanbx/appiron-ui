<!--
 * @Author: 段本显
 * @FilePath: /appiron-ui/docs/comps/table.md
 * @Date: 2022-08-18 17:44:51
 * @LastEditors: 段本显
 * @LastEditTime: 2022-08-18 17:45:35
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
-->

# Table 基础表格

基于 element-plus 二次封装

## 基础表格

基础的表格展示用法。

:::demo data 定义表格数据 tableColumn 定义表格列数组

table/table

:::

## 显示勾选和序列的表格

勾选和序列的表格展示用法。

:::demo 传入 showIndex 可显示序号，传入 checkList 可显示勾选，如果 checkList 是数组为多选，对象为单选

table/check-table

:::

## 自定义列

自定义列表格展示用法。

:::demo 需要指定 slot 为 true name 为对应列的 key 加上 Col （nameCol）

table/column-table

:::

## Table 属性

| 属性              | 说明                                 | 类型            | 可选值 | 默认值    |
| ----------------- | ------------------------------------ | --------------- | ------ | --------- |
| data              | 表格数据                             | unknow[]        | -      | []        |
| table-column      | 表格列数组                           | Column[]        | -      | []        |
| row-key           | 表格列唯一 key,启用多选单选时必传    | String          | -      | id        |
| check-list        | 默认勾选的数据                       | Array \| Object |        | Undefined |
| reserve-selection | 分页的时候是否记录所有分页的勾选数据 | Boolean         |        | false     |
| show-index        | 是否显示序号                         | Boolean         | -      | false     |
