# el-table-export-with-formatter
[el-table-export](https://github.com/tuanzisama/elTableExport/stargazers)的enhancement，增加formatter支持


### 安装 Installation

``` 
npm install el-table-export-with-formatter --save
```


### 新增参数 Arguments

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------ | ------ | ------ | ------ | ------ |
| useFormatter | 输出数据时是否使用table中定义的formatter | Boolean |  — |  true | 

### 例子 DEMO

~~说什么不如上一个demo~~
[demo文件](./demo.vue)

``` 
// 引用
import { elTableExport } from "el-table-export";

/* ⚠ 创建实例时需传入一个 table组件的Vue实例（必选）
 * 支持传入一个全局配置对象（非必选）
 */
let eteInstance = new elTableExport(this.$refs.elTable, {
    fileName: "export-demo",
    type: "csv",
    withBOM: false,
    useFormatter: true, //输出数据时是否使用table中定义的formatter
});
// 创建实例后使用 export() 方法执行导出功能
eteInstance.export();
```
