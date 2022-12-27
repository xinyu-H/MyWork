<template>
    <div class="FilePreview">
        <div class="FilePreview-box">
            <li v-for="(v, i) in list" :key="i">
                <span>{{ v.title }}</span>
                <input :type="v.ref === 'docx' ? 'file' : 'hidden'" :ref="v.ref" :class="v.ref">
                <el-button type="primary" @click="previewFile(v)">预览</el-button>
            </li>
        </div>
        <el-dialog :visible.sync="dialogTableVisible" :title="'预览' + refName" width="100%" top="0" style="overflow:hidden;">
            <div v-if="refName === 'docx'" ref="file" class="fileDom"></div>
            <div v-if="refName === 'pdf'">
                <pdf v-for="(v, i) in numPages" :key="i" :src="pdfPath" :page="v" ref="pdf"></pdf>
            </div>
            <div v-if="refName === 'excel'" id="mysheet" style="margin:0px;padding:0px;width:100%;height:100%;"></div>
            <iframe v-if="refName === 'ppt'" id="iframe1" width="100%" height="100%" frameborder='no' border='0' marginwidth='0' marginheight='0' scrolling='no' allowtransparency='yes'
            :src="'https://view.officeapps.live.com/op/view.aspx?src='+pptPath"></iframe>
        </el-dialog>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';
import LuckyExcel from 'luckyexcel'
import axios from 'axios'
import pdf from 'vue-pdf'
let docx = require('docx-preview');

export default {
    name: 'FilePreview',
    components: {
        pdf
    },
    data() {
        return {
            dialogTableVisible: false,
            refName: '',
            list: [{
                title: '预览docx',
                ref: 'docx',
                npm: 'npm i docx-preview -S'
            },{
                title: '预览pdf',
                ref: 'pdf',
                npm: 'npm install --save vue-pdf'
            },{
                title: '预览ecxel',
                ref: 'excel',
                npm: 'npm install luckyexcel'
            },{
                title: '预览ppt',
                ref: 'ppt',
                npm: ''
            }],
            numPages: null,
            pdfPath: '/static/files/pdf.pdf',
            excelPath: '../../static/files/excel.xlsx',
            pptPath: '../../static/files/ppt.pptx',
            
        }
    },
    computed: {
        
    },
    methods: {
        previewFile (val) {
            this.refName = val.ref
            // docx
            if (val.ref === 'docx') {
                let file = document.querySelector('.' + val.ref).files[0]
                if (!file) return Dialog({ message: '请选择文件', confirmButtonColor: '#39f' });
                this.dialogTableVisible = true
                // 将file转为buffer
                let fr = new FileReader();
                fr.readAsArrayBuffer(file);
                fr.addEventListener("loadend",(e) => {
                    let buffer = e.target.result;
                    docx.renderAsync(buffer, document.querySelector('.fileDom'))
                    setTimeout(()=>{
                        document.querySelector('.docx-wrapper').style.padding = '0px'
                        document.querySelector('section').style.width = '100%'
                        document.querySelector('section').style.padding = '20px 10px'
                    }, 100)
                    this.changeStyle()
                }, false);
            }
            // pdf
            if (val.ref === 'pdf') {
                this.dialogTableVisible = true
                let loadingTask = pdf.createLoadingTask(this.pdfPath)
                loadingTask.promise.then(pdf => {
                    this.numPages = pdf.numPages
                    this.changeStyle()
                }).catch(err => {
                    console.error('pdf 加载失败', err);
                })
            }
            // excel
            if (val.ref === 'excel') {
                this.dialogTableVisible = true
                this.changeStyle()
                // 创建表格
                window.luckysheet.create({
                    container: 'mysheet' // 设定DOM容器的id
                });
                // 加载 excel 文件
                LuckyExcel.transformExcelToLuckyByUrl(this.excelPath, "", (exportJson, luckysheetfile) => {
                    console.log(exportJson);
                    console.log(luckysheetfile);
                    if(exportJson.sheets==null || exportJson.sheets.length==0){
                        alert("文件读取失败!");
                        return;
                    }
                    // 销毁原来的表格
                    window.luckysheet.destroy();
                    // 重新创建新表格
                    window.luckysheet.create({
                        container: 'mysheet', // 设定DOM容器的id
                        showtoolbar: false, // 是否显示工具栏
                        showinfobar: false, // 是否显示顶部信息栏
                        showstatisticBar: false, // 是否显示底部计数栏
                        sheetBottomConfig: false, // sheet页下方的添加行按钮和回到顶部按钮配置
                        allowEdit: false, // 是否允许前台编辑
                        enableAddRow: false, // 是否允许增加行
                        enableAddCol: false, // 是否允许增加列
                        sheetFormulaBar: false, // 是否显示公式栏
                        enableAddBackTop: false,//返回头部按钮
                        data:exportJson.sheets, //表格内容
                        title:exportJson.info.name  //表格标题
                    });
                });
            }
            // ppt 
            if (val.ref === 'ppt') {
                this.dialogTableVisible = true
                this.changeStyle()
            }
        },
        changeStyle() {
            setTimeout(()=>{
                document.querySelector('.el-dialog__body').style.overflow = 'auto'
                document.querySelector('.el-dialog__body').style.height = 'calc(100vh - 50px)'
            }, 100)
        }
    },
    async mounted () {
        
    }
}

</script>

<style lang="scss">
.FilePreview {
    width: 100%;
    height: 100%;
    padding: .1rem;
}
.FilePreview-box {
    width: 100%;
    height: auto;
    li {
        font-size: 16px;
        width: 100%;
        height: 60px;
        text-align: left;
        span {
            display: inline-block;
            width: 20%;
        }
        input {
            font-size: 16px;
            width: 56%;
        }
        button {
            float: right;
        }
    }
    .el-dialog__body {
        width: 100%;
        height: calc(100vh - 50px);
        overflow: auto;
    }
}

</style>