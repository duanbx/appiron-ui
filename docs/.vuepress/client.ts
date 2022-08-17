import { defineClientConfig } from "@vuepress/client"

// import {use} from 'vuepress'

import elementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"

import APPIronUI from "appiron-ui"
import "appiron-ui/theme-chalk/index.css"

export default defineClientConfig({
  enhance({ app }) {
    const files = (import.meta as any).globEager("../examples/**/**.vue")
    app.use(elementPlus)
    app.use(APPIronUI)
    //依次进行注册
    Object.keys(files).forEach((key) => {
      //	字符串首字母大写处理
      function strUp(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
      //获取单个组件内容
      const _component = files[key]?.default
      //获取组件名称
      let _componentName = key.split("/").slice(-1)[0].replace(".vue", "")
      let _componentNameArr = _componentName.split("/")
      _componentName = _componentNameArr[_componentNameArr.length - 1]
      _componentName = _componentName
        .split("-")
        .map((el) => strUp(el))
        .join("")
      const COMPONENT = _component.default || _component
      //注册在vue上
      app.component(_componentName, COMPONENT)
    })
  },
  setup() {},
  rootComponents: [],
})
