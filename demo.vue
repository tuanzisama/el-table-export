<template>
    <div class="table-panel">
        <el-radio-group v-model="exportType">
            <el-radio v-for="(item, index) in supportType" :key="index" :label="item" border>{{item}}</el-radio>
        </el-radio-group>
        <el-button class="export-it" type="primary" @click="exportFile()">Export it!</el-button>
        <el-table :data="tableData" stripe style="width: 100%" ref="elTable">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { elTableExport } from "@/assets/elTableExport.js";
export default {
    data() {
        return {
            supportType: ["csv", "txt", "json", "xls"],
            exportType: "csv",
            tableData: [
                {
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄"
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄"
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄"
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄"
                }
            ]
        };
    },
    methods: {
        exportFile() {
            /*
             * 创建elTableExport实例:
             * @params: {Object} elTableRef element-ui的Table组件的Vue实例
             * @params: {Object} defOpts 传入的默认参数
             */
            let exportTable = new elTableExport(this.$refs.elTable, {
                fileName: "export-demo",
                type: this.exportType
            });
            exportTable.export();
        }
    }
};
</script>

<style>
.table-panel {
    width: 800px;
    margin: 0 auto;
    border: 1px dashed rgb(156, 156, 156);
    padding: 10px;
    box-sizing: border-box;
}
.table-panel .el-radio {
    margin-right: 10px;
}
.export-it {
    margin-right: 20px;
}
</style>