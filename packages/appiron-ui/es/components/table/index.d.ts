declare const ATable: import("appiron-ui/es/utils/with-install").SFCWithInstall<import("vue").DefineComponent<{
    readonly data: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    readonly tableColumn: {
        readonly type: () => import("./src/table").Column[];
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
}, unknown, {
    load: boolean;
}, {
    isMultipleSelect(): boolean;
}, {
    handleSelectionChange(val: any): void;
    setDefaultCheck(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: {
        readonly type: ArrayConstructor;
        readonly default: () => any[];
    };
    readonly tableColumn: {
        readonly type: () => import("./src/table").Column[];
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
}>>, {
    readonly data: unknown[];
    readonly tableColumn: import("./src/table").Column[];
    readonly reserveSelection: boolean;
    readonly rowKey: string;
    readonly showIndex: boolean;
}>>;
export { ATable };
export default ATable;
