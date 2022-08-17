/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:11:40
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-15 15:27:35
 * @Description:
 */
import "appiron-ui/theme-chalk/index.css"
import A from "appiron-ui"
import { createApp } from "vue"
import App from "./app.vue"
const app = createApp(App)
app.use(A).mount("#app")
