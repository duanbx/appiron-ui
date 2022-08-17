/*
 * @Author: 段本显
 * @FilePath: \appiron-ui\src\package\table-popover\index.ts
 * @Date: 2021-12-13 17:11:24
 * @LastEditors: 段本显
 * @LastEditTime: 2021-12-16 15:34:06
 * @Email: duanbenxian@jianq.com
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
import TablePopover from "./src/table-popover.vue"
import { withInstall } from "@appiron-ui/utils/with-install"

const ATablePopover = withInstall(TablePopover)
export { ATablePopover }
export default ATablePopover
