<template>
    <div>
    <table class="table" :style="{height:tableHeights+'px'}">
        <thead><tr>
            <th v-for="head in tableInfo.head">{{head}}</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(table,index) in tableInfos.table" :class="index % 2 != 0 ?'active':''">
            <td v-for="item in table" >
                {{item}}
            </td>
        </tr>
        </tbody>
    </table>
    </div>
</template>
<script>
    export default{
        props:{
            tableInfo:Object,
            tableHeight:Number
        },
        name:'table',
        data(){
            return {
                tableInfos:this.tableInfo,
                tableHeights:this.tableHeight
            }
        }

    }
</script>
<style>
    .table {
        font-family: Consolas,Menlo,Courier,monospace;
        font-size: 12px;
        border-collapse: collapse;
        border-spacing: 0;
        empty-cells: show;
        border: 0px solid #e9e9e9;
        width: 80%;
        margin-bottom: 24px;
    }
    .table th {
        background-color: #dddee1;
        border-bottom: 1px solid #e0e0e0;
        padding: 8px 16px;
        text-align: center;
        vertical-align: middle;
    }
    .table td{
        border-bottom: 1px solid #eeeeee;
        padding: 8px 16px;
        text-align: left;
        vertical-align: middle!important;
    }
    .table th {
        white-space: nowrap;
        color: #5c6b77;
        font-weight: 600;
    }
</style>