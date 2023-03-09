<template>
    <div class="lotteryPage">
        <div class="content">
            <div v-for="(v, i) in dataList" :key="i" :class="current === i ? 'color' : ''">{{ v.name }}</div>
        </div>
        <footer>
            <el-button type="primary" :disabled="disabledBtn" @click="begin">开始</el-button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Lottery',
        data () {
            return {
                dataList: [{
                    name: '麻辣烫'
                }, {
                    name: '盖饭'
                }, {
                    name: '凉皮'
                }, {
                    name: '汉堡'
                }, {
                    name: '炒饭'
                }, {
                    name: '米粥'
                }, {
                    name: '黄焖鸡'
                }, {
                    name: '甜点'
                }, {
                    name: '牛肉面'
                }, {
                    name: '炒饼'
                }, {
                    name: '烧烤'
                }, {
                    name: '披萨'
                }, {
                    name: '拉面'
                }, {
                    name: '炒拉条'
                }, {
                    name: '炸鸡'
                }, {
                    name: '卷饼'
                }, {
                    name: '焖面'
                }, {
                    name: '煎饼'
                }, {
                    name: '热干面'
                }, {
                    name: '胡辣汤'
                }, {
                    name: '疙瘩汤'
                }, {
                    name: '小碗菜'
                }, {
                    name: '米粉'
                }, {
                    name: '炸串'
                }],
                current: 0,
                timer: null,
                disabledBtn: false,
            }
        },
        watch: {
            timer(newVal) {
                setTimeout(() => {
                    clearInterval(this.timer)
                    this.disabledBtn = false
                }, this.$Utils.Tools.getRandom(25, 35, 1) * 100)
            }
        },
        methods: {
            begin() {
                this.timer = setInterval(() => {
                    this.current = this.$Utils.Tools.getRandom(0, this.dataList.length-1, 1)
                    this.disabledBtn = true
                }, 100)
            }
        },
        mounted () {
            this.current = this.$Utils.Tools.getRandom(0, this.dataList.length-1, 1)
        }
    }
</script>

<style lang="scss" scoped>
.lotteryPage {
    width: 100%;
    height: 100%;
    padding: .1rem;
    position: relative;
    >.content {
        width: 100%;
        height: calc(100% - .4rem);
        >div {
            width: .6rem;
            height: .6rem;
            line-height: .6rem;
            text-align: center;
            margin: .05rem;
            float: left;
            // background-color: skyblue;
            box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(150, 150, 150, 0.6);
            border-radius: .06rem;
        }
        .color {
            background-color: skyblue;
        }
    }
    footer {
        width: 100%;
        height: .4rem;
    }
    @media (min-width: 900px) {
        >.content {
            width: 100%;
            height: calc(100% - 50px);
            >div {
                width: 120px;
                height: 120px;
                line-height: 120px;
                margin: 10px;
                font-size: 26px;
            }
        }
        >footer {
            width: 100%;
            height: 50px;
        }
    }
}
</style>