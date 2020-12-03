<template>
    <div class="table-panel">
        <el-radio-group v-model="exportType">
            <el-radio v-for="(item, index) in supportType" :key="index" :label="item" border>{{item}}</el-radio>
        </el-radio-group>
        <el-button class="export-it" type="primary" @click="exportFile()">Export it !</el-button>
        <el-table :data="tableData" stripe style="width: 100%" ref="elTable">
            <el-table-column prop="date" label="Date" width="180">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="180">
            </el-table-column>
            <el-table-column prop="remark" label="Remark" :formatter="formatterHandler">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import Vue from "vue";
import { Table, TableColumn, Button, Radio, RadioGroup } from "element-ui";
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Radio.name, Radio);
Vue.component(Button.name, Button);
import "element-ui/lib/theme-chalk/index.css";
import elTableExport from "../";
export default {
    data() {
        return {
            supportType: ["csv", "txt", "json", "xls"],
            exportType: "csv",
            tableData: [
                {
                    date: "2016-05-02",
                    name: "Alice",
                    remark: "Ugbzs nfepb wovf txhadwnw oplb.",
                },
                {
                    date: "2016-05-04",
                    name: "Kennedy",
                    remark: "Arphoomkq wobr jwkji pzyrn.",
                },
                {
                    date: "2016-05-01",
                    name: "Nelson",
                    remark: "Bcrpajgb klmqohpp forsutl kqstif.",
                },
                {
                    date: "2016-05-03",
                    name: "Frank",
                    remark: "Rulrekejd wlk uuyexlm vmk mljmwfll.",
                },
            ],
        };
    },
    methods: {
        exportFile() {
            elTableExport(this.$refs.elTable, {
                fileName: "export-demo",
                type: this.exportType,
                useFormatter: true,
            })
                .then(() => {
                    console.info("ok");
                })
                .catch((err) => {
                    console.info(err);
                });
        },
        formatterHandler(row) {
            return "formatter: " + row.remark;
        },
    },
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
