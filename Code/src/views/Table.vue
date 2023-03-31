<template>
    <div class="Table">
        <el-button type="primary" @click="exportTable()">导出</el-button>
        <el-table :data="tableData" :border="'border'" id="selectTable" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import { Toast } from 'vant';
import toExcel from '@/utils/excel'
export default {
    name: 'Table',
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
        }
    },
    computed: {
        
    },
    methods: {
        exportTable() {
            toExcel.getExcel('#selectTable','test')
        },
        /**
         * @description 将海量数据进行分组
         * @param { Array } arrsy 分组的数据
         * @param { number } size  每组多少个
         */
        chunkArrayFun(array, size) {
            let arr = [];
            let index = 0;

            for (let i = 0; i < array.length; i += size) {
                let chunkArr = [];

                for (let j = 0; j < size; j++) {
                    chunkArr[j] = array[index++];
                    if (index == array.length) break;
                }
                arr.push(chunkArr);
            }
            return arr;
        },
    },
    async mounted () {
        let date1 = new Date().getTime()
        let data = []
        for (let i = 0; i < 40000; i++) {
            data.push({
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            })
        }
        let arr = this.chunkArrayFun(data, 600);
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                this.tableData.push(...arr[i]);
            }, 10);
        }
        this.$nextTick(() => {
            console.log(new Date().getTime() - date1)
        })
    }
}

</script>

<style lang="scss">
    .Table {
        width: 100%;
        height: 100%;
        padding: .1rem;
    }
</style>