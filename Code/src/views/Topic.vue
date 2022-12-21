<template>
    <div class="Topic">
        <header>
            <div class="title">小学生习题测试</div>
            <div class="title-date" v-if="radio && beginAnswer">剩余时间:{{ remainingTime }}</div>
            <div class="title-date" v-if="isAccomplish">
                答对: <span style="font-weight:800;color:rgb(6, 167, 6);">{{ rightNum }}</span> 题&nbsp;
                答错: <span style="font-weight:800;color:rgb(219, 14, 14);">{{ value3 - rightNum }}</span> 题
            </div>
        </header>
        <div class="topic-select">
            <div>
                <label for="">范围:</label>
                <el-select v-model="value1" placeholder="请选择" :disabled="beginAnswer">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <label for="">算法:</label>
                <el-select v-model="value2" placeholder="请选择" :disabled="beginAnswer">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <label for="">数量:</label>
                <el-select v-model="value3" placeholder="请选择" :disabled="beginAnswer">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <label for="" class="norequired">计时:</label>
                <el-radio v-model="radio" :label="0" :disabled="beginAnswer">否</el-radio>
                <el-radio v-model="radio" :label="1" :disabled="beginAnswer">是</el-radio>
            </div>
            <div v-if="radio">
                <label for="">时间:</label>
                <el-select v-model="value4" placeholder="请选择" :disabled="beginAnswer">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div>
                <el-button type="warning" @click="suspend()" v-if="radio && beginAnswer">{{ isSuspend ? '继续' : '暂停' }}</el-button>
                <el-button type="primary" @click="confirm()" v-if="!beginAnswer">确认</el-button>
                <el-button type="primary" @click="check()" v-else>完成</el-button>
            </div>
        </div>
        <div class="topic-content">
            <div v-for="(v, i) in topicLsit" :key="i">
                <span>{{ i + 1 }}.</span>
                {{ v.num1 }} {{ v.sym }} {{ v.num2 }} = 
                <div>
                    <input type="text" v-model="v.answer" :disabled="isSuspend"/>
                    <span class="check el-icon-check" v-if="isAccomplish && v.correct"></span>
                    <span class="close el-icon-close" v-if="isAccomplish && !v.correct"></span>
                    <span class="rightAnswers" v-if="isAccomplish && !v.correct">{{ v.rightAnswers }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';

export default {
    name: 'Topic',
    data() {
        return {
            options1: [],
            value1: '',             // 范围
            options2: [{
                value: 1,
                label: '加减'
            }, {
                value: 2,
                label: '乘除'
            }, {
                value: 3,
                label: '加减乘除'
            }],
            value2: '',             // 算法
            options3: [],
            value3: '',             // 题数
            options4: [],
            value4: '',             // 计时时间
            radio: '',              // 是否计时
            remainingTime: '',      // 剩余时间
            beginAnswer: false,      // 是否开始答题
            timer: null,
            isSuspend: false,
            nowDate: '',
            lastDate: '',
            symbolLsit1: ['+', '-'],
            symbolLsit2: ['×', '÷'],
            topicLsit: [],
            isAccomplish: false,
            isDec: false,
            rightNum: 0,
        }
    },
    computed: {
        
    },
    watch: {
        
    },
    methods: {
        confirm() {
            if (!this.value1) return Dialog({ message: '请选择范围', confirmButtonColor: '#39f' });
            if (!this.value2) return Dialog({ message: '请选择算法', confirmButtonColor: '#39f' });
            if (!this.value3) return Dialog({ message: '请选择数量', confirmButtonColor: '#39f' });
            if (this.radio && !this.value4) return Dialog({ message: '请选择时间', confirmButtonColor: '#39f' });
            this.topicLsit = []
            this.isAccomplish = false
            this.isSuspend = false
            if (this.value2 == 1) {
                for (let i = 0; i < this.value3; i++) this.topicLsit.push(this.getTopic1())
            }
            if (this.value2 == 2) {
                for (let i = 0; i < this.value3; i++) this.topicLsit.push(this.getTopic2())
            }
            if (this.value2 == 3) {
                let funList = [this.getTopic1, this.getTopic2]
                for (let i = 0; i < this.value3; i++) this.topicLsit.push(funList[this.getRandom(1)]())
            }
            if (this.radio && this.value4) {
                this.nowDate = Date.now()
                this.lastDate = this.nowDate + (+this.value4 * 60 * 1000)
                this.timer = setInterval(() => {
                    this.timing(this.nowDate, this.lastDate)
                    this.lastDate -= 1000
                }, 1000)
            }
            this.beginAnswer = true
        },
        check () {
            this.suspend()
            // 结果计算 rightAnswers
            let flag = false;
            this.topicLsit.forEach(v => {
                if (!v.answer.trim()) flag = true
            })
            if (flag) {
                return Dialog.confirm({
                    title: '提示',
                    message: '有题目未做完哦，是否提交'
                }).then(() => {
                    this.accomplish()
                }).catch(() => {
                    this.suspend()
                });
            } else {
                this.accomplish()
            }
        },
        accomplish () {
            this.isAccomplish = true
            this.beginAnswer = false
            this.remainingTime = ''
            clearInterval(this.timer)
            this.topicLsit.forEach(v => {
                if (v.sym == '+') {
                    v.correct = (v.num1 + v.num2).toString() === v.answer
                    if (v.correct) this.rightNum ++
                    v['rightAnswers'] = v.num1 + v.num2
                }
                if (v.sym == '-') {
                    v.correct = (v.num1 - v.num2).toString() === v.answer
                    if (v.correct) this.rightNum ++
                    v['rightAnswers'] = v.num1 - v.num2
                }
                if (v.sym == '×') {
                    v.correct = (v.num1 * v.num2).toString() === v.answer
                    if (v.correct) this.rightNum ++
                    v['rightAnswers'] = v.num1 * v.num2
                }
                if (v.sym == '÷') {
                    v.correct = (v.num1 / v.num2).toString() === v.answer
                    if (v.correct) this.rightNum ++
                    v['rightAnswers'] = v.num1 / v.num2
                }
            })
        },
        // 生成加减题目
        getTopic1 () {
            let sym = this.symbolLsit1[this.getRandom(1)]
            let num1, num2;
            if (sym === '+') {
                num1 = this.getRandom(this.value1 / 2)
                num2 = this.getRandom(this.value1 / 2)
            } else {
                num1 = this.getRandom(this.value1)
                num2 = this.getRandom(this.value1)
            }
            if (num2 > num1) [num1, num2] = [num2, num1]
            return { num1, num2, sym, answer: '', correct: false }
        },
        // 生成乘除题目
        getTopic2 () {
            let sym = this.symbolLsit2[this.getRandom(1)]
            let num1, num2;
            let randomObj = this.getRandom(this.value1, this.value1, sym)
            num1 = randomObj.random1
            num2 = randomObj.random2
            if (num2 > num1) [num1, num2] = [num2, num1]
            return { num1, num2, sym, answer: '', correct: false }
        },
        // 暂停
        suspend() {
            this.isSuspend = !this.isSuspend;
            if (this.isSuspend) {
                clearInterval(this.timer)
            } else {
                this.timer = setInterval(() => {
                    this.timing(this.nowDate, this.lastDate)
                    this.lastDate -= 1000
                }, 1000)
            }
        },
        // 计时
        timing (start, end = new Date()) {
            let sD = new Date(start).getTime()
            let eD = new Date(end).getTime()
            let diff = (eD - sD) / 1000
            if (diff <= 0) clearInterval(this.timer);
            let m = this.patch(diff / 60);
            let s = this.patch(diff % 60);
            this.remainingTime = `${m}分${s}秒`
        },
        // 补零
        patch(str){
            str = parseInt(str)
            return +str <= 0 ? '00' : +str < 10 ? '0' + str : str;
        },
        initData () {
            for (let i = 0; i < 100; i++) {
                if ((i+1) % 10 === 0) {
                    this.options3.push({
                        value: i+1,
                        label: i+1 +'道'
                    })
                    this.options1.push({
                        value: i+1,
                        label: i+1 +'以内'
                    })
                }
                if ((i+1) % 5 === 0) {
                    this.options4.push({
                        value: i+1,
                        label: i+1 +'分钟'
                    })
                }
            }
        },
        getRandom(num, type, sym) {
            if (sym == '×') {
                let random1 = Math.round(Math.random() * num);
                let random2 = Math.round(Math.random() * num);
                if ((random1 * random2) > type) {
                    return this.getRandom(num, type, sym)
                } else {
                    return {random1, random2} 
                }
            }
            if (sym == '÷') {
                let random1 = Math.round(Math.random() * num);
                let random2 = Math.round(Math.random() * num);
                if (random2 > random1) [random1, random2] = [random2, random1]
                if (!this.isDec && (random1 / random2) % 1 != 0) {
                    return this.getRandom(num, type, sym)
                } else {
                    return {random1, random2} 
                }
            }
            return Math.round(Math.random() * num);
        }
    },
    mounted () {
        this.initData()
    }
}

</script>

<style lang="scss">
    .Topic {
        width: 100%;
        height: 100%;
        padding: .1rem;
        overflow: hidden;
        // background: url(../assets/img/Index/9.jpg) no-repeat;
        // background-size: 100% 100%;
        &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: inherit;
            filter: blur(2px);
            /*为了模糊更明显，调高模糊度*/
            z-index: -1;
        }
    }
    header {
        width: 100%;
        height: .23rem;
        display: flex;
        justify-content: space-around;
        .title {
            font-weight: 800;
        }
    }
    .topic-select {
        width: 100%;
        height: .85rem;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(150, 150, 150, 0.6);
        border-radius: .06rem;
        padding: .05rem 0;
        background-color: #fff;
        >div {
            width: 33%;
            font-size: .14rem;
            margin-top: 5px;
            line-height: .3rem;
            >label:not([class]) {
                position: relative;
                &::before {
                    content: '*';
                    position: absolute;
                    left: 0px;
                    transform: translateX(-100%);
                    color: red;
                }
            }
            .el-select {
                width: 60%;
                input {
                    height: .3rem;
                    padding: 0 0 0 5px;
                }
                .el-input {
                    >span {
                        right: 0;
                        display: none;
                    }
                }
            }
            .el-radio {
                margin-right: .03rem;
                .el-radio__label {
                    padding-left: .05rem;
                }
            }
            button {
                width: 40%;
                height: 30px;
                line-height: 6px;
                padding: 0;
            }
        }
    }
    .topic-content {
        width: 100%;
        height: calc(100% - 1.2rem);
        display: flex;
        flex-wrap: wrap;
        padding: 10px 0;
        overflow: auto;
        >div {
            position: relative;
            width: 50%;
            padding: .05rem 0;
            text-align: left;
            >span {
                display: inline-block;
                width: 10%;
                height: 100%;
                float: left;
                margin: -.02rem .02rem 0 0;
                font-size: .1rem;
                color: rgb(43, 147, 245);
                font-weight: 800;
            }
            >div {
                width: 50%;
                float: right;
                >input {
                    width: 30%;
                    padding: 0 4px;
                }
                >span {
                    font-weight: 800;
                }
                .check {
                    color: rgb(6, 167, 6);
                }
                .close {
                    color: rgb(219, 14, 14);
                }
                .rightAnswers {
                    color: rgb(6, 167, 6);
                    font-size: .14rem;
                }
            }
        }
    }
    @media (min-width: 900px) {
        .Topic {
            padding: 10px;
        }
        header {
            font-size: 30px;
            height: 40px;
        }
        .topic-select {
            margin-top: 20px;
            font-size: 20px;
            margin-left: 0;
            height: 60px;
            padding: 10px;
            border-radius: 10px;
            >div {
                width: auto;
                font-size: 20px;
                line-height: unset;
                .el-select {
                    width: 70%;
                    input {
                        height: 36px;
                    }
                }
                .el-radio {
                    margin-right: 20px;
                    .el-radio__label {
                        padding-left: 5px;
                    }
                }
                button {
                    width: unset;
                    height: 36px;
                    line-height: 10px;
                    padding: 0 20px;
                }
            }
        }
        .topic-content {
            width: 100%;
            height: calc(100% - 120px);
            >div {
                width: 20%;
                padding: 8px 0;
                font-size: 22px;
                >span {
                    display: inline-block;
                    width: 10%;
                    height: 100%;
                    float: left;
                    margin: -6px 10px 0 0;
                    font-size: 16px;
                }
                >div {
                    margin-right: 50px;
                    .rightAnswers {
                        font-size: 20px;
                    }
                }
            }
        }
    }
</style>