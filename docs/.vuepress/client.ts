/*
 * @Author: 段本显
 * @FilePath: /appiron-ui/docs/.vuepress/client.ts
 * @Date: 2022-08-18 17:56:02
 * @LastEditors: 段本显
 * @LastEditTime: 2022-08-19 09:24:26
 * @Email: duanbenxian@appiron.cn
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
import { defineClientConfig } from "@vuepress/client"

// import {use} from 'vuepress'

import elementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"

import * as APPIronUI from "@appiron-ui/components"
import "appiron-ui/theme-chalk/index.css"

export default defineClientConfig({
  enhance({ app, router }) {
    const files = (import.meta as any).globEager("../examples/**/**.vue")
    app.use(elementPlus)
    Object.keys(APPIronUI).forEach((key) => {
      app.component(key, APPIronUI[key])
    })

    // app.use(APPIronUI)
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
    router.beforeEach((to, form, next) => {
      // 组件跳转首页
      if (decodeURIComponent(to.fullPath) === "/comps/") {
        next("/comps/table.html")
      } else {
        next()
      }
    })
  },
  setup() {},
  rootComponents: [],
})
