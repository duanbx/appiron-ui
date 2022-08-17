import type { ExtractPropTypes } from "vue"
export type Column = {
  key: string
  label?: string
  attrs?: {
    [key: string]: unknown
  }
}
export const tableProps = {
  data: {
    type: Array,
    required: true,
  },
  tableColumn: {
    type: Array as () => Column[],
    required: true,
  },
  showCheckBox: {
    type: Boolean,
    default: false,
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
} as const
export type TableProps = ExtractPropTypes<typeof tableProps>
