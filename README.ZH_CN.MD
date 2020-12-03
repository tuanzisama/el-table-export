# el-table-export
使Element-UI中的Table组件 导出text, json, csv, xls文件。

[English Docs](README.MD)

[![GitHub stars](https://img.shields.io/github/stars/tuanzisama/elTableExport)](https://github.com/tuanzisama/elTableExport/stargazers)
[![GitHub license](https://img.shields.io/github/license/tuanzisama/elTableExport)](https://github.com/tuanzisama/elTableExport/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/el-table-export.png)](https://nodei.co/npm/el-table-export/)

### 安装 Installation

``` 
npm install el-table-export --save
```

or

``` 
yarn add el-table-export
```

### 参数 Arguments

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| fileName | 文件名 | String |  — |  export | 
| type | 输出格式 | String |  text / json / csv / xls |  csv | 
| withBOM | 将BOM（字节顺序标记）元添加到CSV文件。 Excel在读取UTF8 CSV文件时需要将BOM头添加到CSV文件 | Boolean |  — | false | 
| useFormatter | 是否使用 Element-UI 提供的 [formatter](https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes) 属性 | Boolean |  — |  true |
| delimiter | 分隔符，仅在导出格式为CSV文件时可用 [来源](https://github.com/zheeeng/export-from-json/blob/master/src/exportFromJSON.ts#L26)| String | — | , |  

### 例子 DEMO

~~说什么不如上一个demo~~
[demo文件](./example/demo.vue)

``` 
// 引用
import elTableExport from "el-table-export";

/* ⚠ 创建实例时需传入一个 table组件的Vue实例（必选）
 * 支持传入一个全局配置对象（非必选）
 */
elTableExport(this.$refs.elTable, {
    fileName: "export-demo",
    type: "csv",
    withBOM: false,
}).then((result) => {
    console.info('ok');
}).catch((err) => {
    console.info(err);
});
```

### 提示 Tips

* table组件的Vue实例不是 `document.querySelector` 等获取的DOM实例，是 `ref` 指定的Vue实例。

