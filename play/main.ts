/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:11:40
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-15 15:27:35
 * @Description:
 */
import elementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "appiron-ui/theme-chalk/index.css"
import { createApp } from "vue"
import App from "./app.vue"
const app = createApp(App)
app.use(elementPlus).mount("#app")
