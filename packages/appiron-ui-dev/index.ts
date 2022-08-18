/*
 * @Author: jing.chen
 * @Date: 2021-11-01 19:20:34
 * @LastEditors: 段本显
 * @LastEditTime: 2022-08-18 16:54:13
 * @Description:
 */
import { ATable, ATablePopover } from "@appiron-ui/components"
import type { App } from "vue" // ts中的优化只获取类型
// ....

const components = [ATable, ATablePopover]
const install = (app: App) => {
  // 每个组件在编写的时候都提供了install方法

  // 有的是组建 有的可能是指令 xxx.install = ()=>{app.directive()}
  components.forEach((component) => app.use(component))
}
export default {
  install,
}
export * from "@appiron-ui/components"

//app.use(XbbPlus)
