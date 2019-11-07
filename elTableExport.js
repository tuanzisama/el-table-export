/**
 * @name elTableExport.js
 * @description 配合Element-UI中的Table组件 导出text, json, csv, xls文件
 * @author Evenwan
 * 
 * powered by exportFromJSON(^1.1.4)
 * https://www.npmjs.com/package/export-from-json
 *  
 */
import exportFromJSON from "export-from-json";
export class elTableExport {
    constructor(elTableRef = null, opts = {
        fileName: 'export',
        type: 'csv',
        withBOM: false,
    }) {
        if (Object.prototype.toString.call(elTableRef) !== '[object Object]' || elTableRef.$vnode.tag.includes('ElTable') === false) {
            throw "请传入一个Element-UI中Table组件的Vue实例"
        }
        this.elTableRef = elTableRef;
        this.defOpts = opts;
    }
    dataHandler() {
        let columns = this.elTableRef.columns.map((element) => {
            let cloumnObj = new Object();
            cloumnObj.prop = element.property;
            cloumnObj.label = element.label;
            return cloumnObj
        });
        let data = this.elTableRef.data;
        let outputData = new Array();
        data.map((value) => {
            let obj = new Object();
            columns.forEach(element => {
                obj[element.label] = value[element.prop]
            });
            outputData.push(obj);
        })
        return outputData;
    }

    /**
     * 导出text, json, csv, xls文件
     * @param {Object} opts 
     * @param {String} opts.fileName 文件名
     * @param {String} opts.type 输出格式 默认为csv文件
     * @param {String} opts.withBOM 将BOM（字节顺序标记）元添加到CSV文件。 Excel在读取UTF8 CSV文件时需要BOM。默认为false。
     */
    export (opts = {}) {
        try {
            let data = this.dataHandler();

            function hasProperty(target, name, defVal) {
                return target.hasOwnProperty(name) ? target[name] : defVal
            }
            exportFromJSON({
                data: data,
                fileName: hasProperty(opts, 'fileName', this.defOpts.fileName),
                exportType: hasProperty(opts, 'type', this.defOpts.type),
                withBOM: hasProperty(opts, 'withBOM', this.defOpts.withBOM)
            });
        } catch (error) {
            console.error(error);
        }
    }
}