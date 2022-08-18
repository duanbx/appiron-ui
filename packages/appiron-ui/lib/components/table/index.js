'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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

var script = vue.defineComponent({
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
  const _component_el_table_column = vue.resolveComponent("el-table-column");
  const _component_el_radio = vue.resolveComponent("el-radio");
  const _component_el_table = vue.resolveComponent("el-table");

  return (vue.openBlock(), vue.createBlock(_component_el_table, vue.mergeProps({ data: _ctx.data }, _ctx.$attrs, {
    onSelectionChange: _ctx.handleSelectionChange,
    onCurrentChange: _ctx.handleSelectionChange,
    "row-key": _ctx.rowKey,
    ref: "multipleTableRef"
  }), {
    default: vue.withCtx(() => [
      (_ctx.checkList)
        ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            (_ctx.isMultipleSelect)
              ? (vue.openBlock(), vue.createBlock(_component_el_table_column, {
                  key: 0,
                  align: "center",
                  type: "selection",
                  width: "50",
                  "reserve-selection": _ctx.reserveSelection
                }, null, 8 /* PROPS */, ["reserve-selection"]))
              : (vue.openBlock(), vue.createBlock(_component_el_table_column, {
                  key: 1,
                  align: "center",
                  width: "50",
                  label: "#"
                }, {
                  default: vue.withCtx(({ row }) => [
                    vue.createVNode(_component_el_radio, {
                      class: "table-radio",
                      "model-value": _ctx.checkList[_ctx.rowKey],
                      label: row[_ctx.rowKey]
                    }, null, 8 /* PROPS */, ["model-value", "label"])
                  ]),
                  _: 1 /* STABLE */
                }))
          ], 64 /* STABLE_FRAGMENT */))
        : vue.createCommentVNode("v-if", true),
      (_ctx.showIndex)
        ? (vue.openBlock(), vue.createBlock(_component_el_table_column, {
            key: 1,
            label: "#",
            align: "center",
            type: "index",
            width: "100"
          }))
        : vue.createCommentVNode("v-if", true),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.tableColumn, (item) => {
        return (vue.openBlock(), vue.createBlock(_component_el_table_column, vue.mergeProps({
          key: item.key,
          label: item.label
        }, {
        minWidth: '80',
        ...item.attrs,
      }, {
          prop: item.key,
          "show-overflow-tooltip": ""
        }), {
          default: vue.withCtx(({ row }) => [
            vue.renderSlot(_ctx.$slots, `${item.key}Col`, { row: row }, () => [
              (_ctx.$slots.default)
                ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [], 64 /* STABLE_FRAGMENT */))
                : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                    vue.createTextVNode(vue.toDisplayString(row[item.key]), 1 /* TEXT */)
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

exports.ATable = ATable;
exports["default"] = ATable;
