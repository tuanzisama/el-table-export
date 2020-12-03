import { ElTable } from "element-ui/types/table";

interface exportOptions {
    /**
     * File Name
     * @default export
     */
    fileName?: string;
    /**
     * Export Type
     * @default csv
     */
    type?: "text" | "json" | "csv" | "xls";
    /**
     * Add BOM(byte order mark) meta to CSV file. BOM is expected by Excel when reading UTF8 CSV file.
     * @default false
     */
    withBOM?: boolean;
    /**
     * Whether to use the formatter attribute provided by Element-UI.
     * See: (https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes)
     * @default true
     */
    useFormatter?: boolean;
    /**
     * Available when the export format is CSV file.
     * See: https://github.com/zheeeng/export-from-json/blob/master/src/exportFromJSON.ts#L26
     * @default ,
     */
    delimiter?: string;
}

declare function elTableExport(ref: ElTable, options: exportOptions): Promise<T>
export default elTableExport