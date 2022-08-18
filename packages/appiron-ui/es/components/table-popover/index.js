import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, renderSlot, createVNode, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createTextVNode } from 'vue';

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

const withInstall = (comp) => {
    comp.install = function (app) {
        app.component(comp.name, comp);
    };
    return comp;
};

const ATablePopover = withInstall(script);

export { ATablePopover, ATablePopover as default };
