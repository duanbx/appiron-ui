/*
 * @Author: 段本显
 * @FilePath: /appiron-ui/packages/components/table/index.ts
 * @Date: 2021-12-14 09:38:05
 * @LastEditors: 段本显
 * @LastEditTime: 2022-08-18 17:20:34
 * @Email: duanbenxian@jianq.com
 * 如果有bug，那肯定不是我的锅，噜噜噜
 */
import Table from "./src/table.vue"
import { withInstall } from "@appiron-ui/utils/with-install"

const ATable = withInstall(Table)
export { ATable }
export default ATable
