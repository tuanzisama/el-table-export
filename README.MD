# el-table-export
Make the Table component in Element-UI support exporting text, json, csv, xls files.

[![GitHub stars](https://img.shields.io/github/stars/tuanzisama/elTableExport)](https://github.com/tuanzisama/elTableExport/stargazers)
[![GitHub license](https://img.shields.io/github/license/tuanzisama/elTableExport)](https://github.com/tuanzisama/elTableExport/blob/master/LICENSE)
[![Rate on Openbase](https://badges.openbase.io/js/rating/el-table-export.svg)](https://openbase.io/js/el-table-export?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

[![NPM](https://nodei.co/npm/el-table-export.png)](https://nodei.co/npm/el-table-export/)

[简体中文 文档](./README.ZH_CN.MD)

### Installation

``` 
npm install el-table-export --save
```

or

``` 
yarn add el-table-export
```

### Arguments

| Name | Desc | Type | Optional | Default |
| ------ | ------ | ------ | ------ | ------ |
| fileName | File Name | String | — |  export | 
| type | Export Type | String |  text / json / csv / xls | csv | 
| withBOM | Add BOM(byte order mark) meta to CSV file. BOM is expected by Excel when reading UTF8 CSV file. | Boolean | — | false | 
| useFormatter | Whether to use the [formatter](https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes) attribute provided by Element-UI. | Boolean | — | true | 
| delimiter | Available when the export format is CSV file. [Source](https://github.com/zheeeng/export-from-json/blob/master/src/exportFromJSON.ts#L26)| String | — | , | 

### DEMO

[Live demo on CodePen](https://codepen.io/Evenwan/pen/jOMWYqW)

[Demo File](./example/demo.vue)

``` 
import elTableExport from "el-table-export";

elTableExport(this.$refs.elTable, {
    fileName: "export-demo",
    type: "csv",
    withBOM: false,
}).then((result) => {
    console.info("successfully");
}).catch((err) => {
    console.info("Error: " , err);
});
```
