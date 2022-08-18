import path from "path"
import fs from "fs"
import { defineUserConfig, defaultTheme } from "vuepress"
import { searchPlugin } from "@vuepress/plugin-search"
import { containerPlugin } from "@vuepress/plugin-container"
import { recoTheme } from "vuepress-theme-reco"
// import { registerComponentsPlugin } from "@vuepress/plugin-register-components"
import { highlight } from "./utils/highlight"
export default defineUserConfig({
  base: "/appiron-ui/", //默认路径
  title: "",
  description: "VuePress搭建APPIron的组件库文档教程示例代码",
  lang: "zh-CN",
  head: [
    ["title", {}, "APPIron-UI"],
    ["link", { rel: "icon", href: "/images/logo.png" }],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "基于Element-plus二次封装",
    },
  },
  plugins: [
    searchPlugin(),
    // registerComponentsPlugin({
    //   componentsDir: path.resolve(__dirname, "../examples/*"),
    // }),
    containerPlugin({
      type: "demo",
      validate(params) {
        return !!params.trim().match(/^demo\s+(.*)$/)
      },
      render(tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
        if (tokens[idx].nesting === 1 && m?.length) {
          // opening tag
          const description = m && m.length > 1 ? m[1] : ""
          const sourceFileToken = tokens[idx + 2]
          const sourceFile = sourceFileToken.children?.[0].content ?? ""
          let source = ""
          if (sourceFileToken.type === "inline") {
            source = fs.readFileSync(
              path.resolve(
                path.join(__dirname, "../../docs"),
                "examples",
                `${sourceFile}.vue`
              ),
              "utf-8"
            )
          }
          const comp = sourceFile.split("/").pop()
          return `
            <div class="description">${description}</div>
            <demo raw-source="${encodeURIComponent(source)}" comp="${comp}">
            ${highlight(source, "vue")}
          `
        }
        // closing tag
        return "</demo>\n"
      },
    }),
  ],
  theme: recoTheme({
    logo: "/images/logo.png",
    lastUpdated: true,
    lastUpdatedText: "更新时间",
    contributors: true,
    contributorsText: "贡献者",
    // 在这里进行配置
    navbar: [
      // 配置顶部导航栏
      {
        text: "指南",
        link: "/guid/",
      },
      {
        text: "组件",
        link: "/comps/table.html",
        activeMatch: "/comps",
      },
    ],
    series: {
      "/guid/": ["/guid"],
      "/comps/": [
        {
          text: "Tabel 表格",
          children: ["/comps/table", "/comps/table-popover"],
        },
      ],
    },
  }),
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
})
