/**
 * @name el-table-export.js
 * @description Make the Table component in Element-UI support exporting text, json, csv, xls files.
 * @author Evenwan
 *
 * powered by exportFromJSON(^1.1.4)
 * https://www.npmjs.com/package/export-from-json
 *
 */
import exportFromJSON from "export-from-json";

function __dataHandler(ref, __options) {
    let data = ref.data;
    return data.reduce((pre, cur) => {
        let obj = new Object();
        ref.columns.forEach(element => {
            let val = cur[element.property];
            if (val && element.formatter && __options.useFormatter)
                val = element.formatter(cur, element);
            obj[element.label] = val
        });
        return pre.concat(obj);
    }, [])
}

export default function (ref, opts = {}) {
    if (Object.prototype.toString.call(ref) !== '[object Object]' || ref.$vnode.tag.includes('ElTable') === false) {
        throw "Illegal parameter. The \"ref\" need an ElTable instance."
    }
    let __options = Object.assign({
        fileName: 'filename',
        type: 'csv',
        withBOM: false,
        useFormatter: true,
        delimiter: ',',
    }, opts)
    return new Promise((resolve, reject) => {
        try {
            let data = __dataHandler(ref, __options);
            exportFromJSON({
                data: data,
                fileName: __options.fileName,
                exportType: __options.type,
                withBOM: __options.withBOM,
                delimiter: __options.delimiter
            });
            resolve()
        } catch (error) {
            reject(error)
        }
    })
}