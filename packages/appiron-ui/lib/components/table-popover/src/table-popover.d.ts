import { Placement } from "element-plus/es/components/popper";
import type { ExtractPropTypes } from "vue";
import { Column } from "../../table/src/table";
export declare const tablePopoverProps: {
    readonly placement: {
        readonly type: () => Placement;
    };
    readonly tableColumn: {
        readonly type: () => Column[];
        readonly required: true;
    };
};
export declare type TableProps = ExtractPropTypes<typeof tablePopoverProps>;
