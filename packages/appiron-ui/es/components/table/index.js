import { defineComponent, resolveComponent, openBlock, createBlock, mergeProps, withCtx, createElementBlock, Fragment, createVNode, createCommentVNode, renderList, renderSlot, createTextVNode, toDisplayString } from 'vue';

const tableProps = {
    data: {
        type: Array,
        default() {
            return [];
        },
    },
    tableColumn: {
        type: Array,
        default() {
            return [];
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
};

var script = defineComponent({
    name: "ATable",
    props: tableProps,
    data() {
        return {
            load: false,
        };
    },
    computed: {
        isMultipleSelect() {
            return Array.isArray(this.checkList);
        },
    },
    methods: {
        handleSelectionChange(val) {
            if (this.load) {
                if (Array.isArray(this.checkList)) {
                    if (Array.isArray(val)) {
                        let copyCheckList = [...this.checkList];
                        const checkKeys = copyCheckList.map((el) => el[this.rowKey]);
                        const valKeys = val.map((el) => el[this.rowKey]);
                        const preCueerntPageSelect = this.data.filter((el) => checkKeys.includes(el[this.rowKey]));
                        const preCueerntPageSelectKeys = preCueerntPageSelect.map((el) => el[this.rowKey]);
                        val.forEach((el) => {
                            const tempIndex = preCueerntPageSelectKeys.indexOf(el[this.rowKey]);
                            if (tempIndex === -1 && !checkKeys.includes(el[this.rowKey]))
                                copyCheckList.push(el);
                        });
                        const deleteKeys = preCueerntPageSelect
                            .filter((el) => !valKeys.includes(el[this.rowKey]))
                            .map((el) => el[this.rowKey]);
                        copyCheckList = copyCheckList.filter((el) => !deleteKeys.includes(el[this.rowKey]));
                        this.$emit("update:checkList", copyCheckList);
                    }
                }
                else {
                    this.$emit("update:checkList", val);
                }
            }
        },
        setDefaultCheck() {
            const multipleTableRef = this.$refs.multipleTableRef;
            if (Array.isArray(this.checkList)) {
                const checkKeys = this.checkList.map((el) => el[this.rowKey]);
                this.data.forEach((row) => {
                    multipleTableRef.toggleRowSelection(row, checkKeys.includes(row[this.rowKey]));
                });
            }
        },
    },
    mounted() {
        this.load = true;
        this.setDefaultCheck();
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_table_column = resolveComponent("el-table-column");
  const _component_el_radio = resolveComponent("el-radio");
  const _component_el_table = resolveComponent("el-table");

  return (openBlock(), createBlock(_component_el_table, mergeProps({ data: _ctx.data }, _ctx.$attrs, {
    onSelectionChange: _ctx.handleSelectionChange,
    onCurrentChange: _ctx.handleSelectionChange,
    "row-key": _ctx.rowKey,
    ref: "multipleTableRef"
  }), {
    default: withCtx(() => [
      (_ctx.checkList)
        ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            (_ctx.isMultipleSelect)
              ? (openBlock(), createBlock(_component_el_table_column, {
                  key: 0,
                  align: "center",
                  type: "selection",
                  width: "50",
                  "reserve-selection": _ctx.reserveSelection
                }, null, 8 /* PROPS */, ["reserve-selection"]))
              : (openBlock(), createBlock(_component_el_table_column, {
                  key: 1,
                  align: "center",
                  width: "50",
                  label: "#"
                }, {
                  default: withCtx(({ row }) => [
                    createVNode(_component_el_radio, {
                      class: "table-radio",
                      "model-value": _ctx.checkList[_ctx.rowKey],
                      label: row[_ctx.rowKey]
                    }, null, 8 /* PROPS */, ["model-value", "label"])
                  ]),
                  _: 1 /* STABLE */
                }))
          ], 64 /* STABLE_FRAGMENT */))
        : createCommentVNode("v-if", true),
      (_ctx.showIndex)
        ? (openBlock(), createBlock(_component_el_table_column, {
            key: 1,
            label: "#",
            align: "center",
            type: "index",
            width: "100"
          }))
        : createCommentVNode("v-if", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableColumn, (item) => {
        return (openBlock(), createBlock(_component_el_table_column, mergeProps({
          key: item.key,
          label: item.label
        }, {
        minWidth: '80',
        ...item.attrs,
      }, {
          prop: item.key,
          "show-overflow-tooltip": ""
        }), {
          default: withCtx(({ row }) => [
            renderSlot(_ctx.$slots, `${item.key}Col`, { row: row }, () => [
              (_ctx.$slots.default)
                ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64 /* STABLE_FRAGMENT */))
                : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(row[item.key]), 1 /* TEXT */)
                  ], 64 /* STABLE_FRAGMENT */))
            ])
          ]),
          _: 2 /* DYNAMIC */
        }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */, ["label", "prop"]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["data", "onSelectionChange", "onCurrentChange", "row-key"]))
}

script.render = render;
script.__file = "packages/components/table/src/table.vue";

const withInstall = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};

const ATable = withInstall(script);

export { ATable, ATable as default };
