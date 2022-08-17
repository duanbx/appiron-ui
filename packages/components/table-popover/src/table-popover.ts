import { Placement } from "element-plus/es/components/popper"
import type { ExtractPropTypes } from "vue"
import { Column } from "../../table/src/table"
export const tablePopoverProps = {
  placement: {
    type: String as () => Placement,
  },
  tableColumn: {
    type: Array as () => Column[],
    required: true,
  },
} as const
export type TableProps = ExtractPropTypes<typeof tablePopoverProps>
