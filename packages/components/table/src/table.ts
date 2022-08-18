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
    default() {
      return []
    },
  },
  tableColumn: {
    type: Array as () => Column[],
    default() {
      return []
    },
  },
  checkList: {
    type: Object,
  },
  reserveSelection: {
    type: Boolean,
    default: true,
  },
  rowKey: {
    type: String,
    default: "id",
  },
  showIndex: {
    type: Boolean,
    default: false,
  },
} as const
export type TableProps = ExtractPropTypes<typeof tableProps>
