/**
 * @name elTableExport.js
 * @description 配合Element-UI中的Table组件 导出text, json, csv, xls文件
 * @author Evenwan
 *
 * powered by exportFromJSON(^1.1.4)
 * https://www.npmjs.com/package/export-from-json
 *
 */
/* eslint-disable */
import exportFromJSON from "export-from-json";
export class elTableExport {
    constructor(elTableRef = null, opts = {
        fileName: 'export',
        type: 'csv',
        withBOM: false,
        useFormatter: true,
        delimiter: ',',
    }) {
        if (Object.prototype.toString.call(elTableRef) !== '[object Object]' || elTableRef.$vnode.tag.includes('ElTable') === false) {
            throw "请传入一个Element-UI中Table组件的Vue实例"
        }
        this.elTableRef = elTableRef;
        this.defOpts = opts;
    }
    dataHandler() {
        let data = this.elTableRef.data;
        return data.reduce((pre, cur) => {
            let obj = new Object();
            this.elTableRef.columns.forEach(element => {
                let val = cur[element.property];
                if (val && element.formatter && this.defOpts && this.defOpts.useFormatter)
                    val = element.formatter(cur, element);
                obj[element.label] = val
            });
            return pre.concat(obj);
        }, [])
    }

    /**
     * 导出text, json, csv, xls文件
     * @param {Object} opts
     * @param {String} opts.fileName 文件名
     * @param {String} opts.type 输出格式 默认为csv文件
     * @param {String} opts.withBOM 将BOM（字节顺序标记）元添加到CSV文件。 Excel在读取UTF8 CSV文件时需要BOM。默认为false。
     * @param {Boolean} opts.useFormatter 输出数据时是否使用table中定义的formatter	
     * @returns {Promise} 返回promise
     */
    export(opts = {}) {
        return new Promise((resolve, reject) => {
            try {
                let data = this.dataHandler();
                function hasProperty(target, name, defVal) {
                    return target.hasOwnProperty(name) ? target[name] : defVal
                }
                exportFromJSON({
                    data: data,
                    fileName: hasProperty(opts, 'fileName', this.defOpts.fileName),
                    exportType: hasProperty(opts, 'type', this.defOpts.type),
                    withBOM: hasProperty(opts, 'withBOM', this.defOpts.withBOM),
                    delimiter: hasProperty(opts, 'delimiter', this.defOpts.delimiter)
                });
                resolve()
            } catch (error) {
                reject(error)
            }
        })
    }
}
