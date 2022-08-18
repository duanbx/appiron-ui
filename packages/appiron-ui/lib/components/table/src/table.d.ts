import type { ExtractPropTypes } from "vue";
export declare type Column = {
    key: string;
    label?: string;
    attrs?: {
        [key: string]: unknown;
    };
};
export declare const tableProps: {
    readonly data: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    readonly tableColumn: {
        readonly type: () => Column[];
        readonly default: () => any[];
    };
    readonly checkList: {
        readonly type: ObjectConstructor;
    };
    readonly reserveSelection: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly rowKey: {
        readonly type: StringConstructor;
        readonly default: "id";
    };
    readonly showIndex: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export declare type TableProps = ExtractPropTypes<typeof tableProps>;
