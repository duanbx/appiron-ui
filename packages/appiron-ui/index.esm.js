import { defineComponent, resolveComponent, openBlock, createBlock, mergeProps, withCtx, createElementBlock, Fragment, createVNode, createCommentVNode, renderList, renderSlot, createTextVNode, toDisplayString, createElementVNode } from 'vue';

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

var script$1 = defineComponent({
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

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
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

script$1.render = render$1;
script$1.__file = "packages/components/table/src/table.vue";

const withInstall = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};

const ATable = withInstall(script$1);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const tablePopoverProps = {
    placement: {
        type: String,
    },
    tableColumn: {
        type: Array,
        required: true,
    },
};

var script = defineComponent({
    props: tablePopoverProps,
    data() {
        return {
            dragIndex: -1,
            enterIndex: -1,
            tableColumnCopy: JSON.parse(JSON.stringify(this.tableColumn)),
        };
    },
    computed: {
        checkList: {
            get() {
                const checkKey = this.tableColumn.map((el) => el.key);
                return this.tableColumnCopy.filter((el) => checkKey.includes(el.key));
            },
            set(list) {
                return list;
            },
        },
        allColumnsSelected: {
            get() {
                return this.checkList.length === this.tableColumnCopy.length;
            },
            set(flag) {
                return flag;
            },
        },
        allColumnsSelectedIndeterminate() {
            return (this.checkList.length &&
                this.checkList.length < this.tableColumnCopy.length);
        },
    },
    methods: {
        change(_list) {
            const checkKey = _list.map((el) => el.key);
            const list = this.tableColumnCopy.filter((el) => checkKey.includes(el.key));
            this.$emit("update:tableColumn", list);
        },
        handleCheckAllChange(checkAll) {
            if (checkAll) {
                this.change(this.tableColumnCopy);
            }
            else {
                this.change([]);
            }
        },
        dragstart(index) {
            this.dragIndex = index;
        },
        drop(e, index) {
            return __awaiter(this, void 0, void 0, function* () {
                e.preventDefault();
                if (this.dragIndex !== index) {
                    this.enterIndex = index;
                    const tempItem = this.tableColumnCopy[this.enterIndex];
                    this.tableColumnCopy[this.enterIndex] =
                        this.tableColumnCopy[this.dragIndex];
                    this.change(this.tableColumnCopy);
                    yield this.$nextTick();
                    this.tableColumnCopy[this.dragIndex] = tempItem;
                    this.change(this.tableColumnCopy);
                }
            });
        },
        dragover(e) {
            e.preventDefault();
        },
    },
});

const _hoisted_1 = /*#__PURE__*/createTextVNode(" 全选 ");
const _hoisted_2 = ["onDrop", "onDragstart"];
const _hoisted_3 = { class: "checkbox" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_popover = resolveComponent("el-popover");

  return (openBlock(), createBlock(_component_el_popover, {
    placement: _ctx.placement,
    trigger: "click"
  }, {
    reference: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    default: withCtx(() => [
      createVNode(_component_el_checkbox, {
        modelValue: _ctx.allColumnsSelected,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.allColumnsSelected) = $event)),
        indeterminate: _ctx.allColumnsSelectedIndeterminate,
        onChange: _ctx.handleCheckAllChange
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue", "indeterminate", "onChange"]),
      createVNode(_component_el_checkbox_group, {
        modelValue: _ctx.checkList,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((_ctx.checkList) = $event)),
        onChange: _ctx.change
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tableColumnCopy, (item, index) => {
            return (openBlock(), createElementBlock("div", {
              key: item.key,
              draggable: "true",
              onDrop: $event => (_ctx.drop($event, index)),
              onDragover: _cache[1] || (_cache[1] = $event => (_ctx.dragover($event))),
              onDragstart: $event => (_ctx.dragstart(index))
            }, [
              createVNode(_component_el_checkbox, { label: item }, {
                default: withCtx(() => [
                  createElementVNode("span", _hoisted_3, toDisplayString(item.label), 1 /* TEXT */)
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"])
            ], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue", "onChange"])
    ]),
    _: 3 /* FORWARDED */
  }, 8 /* PROPS */, ["placement"]))
}

script.render = render;
script.__file = "packages/components/table-popover/src/table-popover.vue";

const ATablePopover = withInstall(script);

const components = [ATable, ATablePopover];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

export { ATable, ATablePopover, index as default };
