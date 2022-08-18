declare const ATablePopover: import("appiron-ui/es/utils/with-install").SFCWithInstall<import("vue").DefineComponent<{
    readonly placement: {
        readonly type: () => import("element-plus").Placement;
    };
    readonly tableColumn: {
        readonly type: () => import("../table/src/table").Column[];
        readonly required: true;
    };
}, unknown, {
    dragIndex: number;
    enterIndex: number;
    tableColumnCopy: any;
}, {
    checkList: {
        get(): any;
        set(list: any): any;
    };
    allColumnsSelected: {
        get(): boolean;
        set(flag: any): any;
    };
    allColumnsSelectedIndeterminate(): boolean;
}, {
    change(_list: any): void;
    handleCheckAllChange(checkAll: any): void;
    dragstart(index: any): void;
    drop(e: any, index: any): Promise<void>;
    dragover(e: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly placement: {
        readonly type: () => import("element-plus").Placement;
    };
    readonly tableColumn: {
        readonly type: () => import("../table/src/table").Column[];
        readonly required: true;
    };
}>>, {}>>;
export { ATablePopover };
export default ATablePopover;
