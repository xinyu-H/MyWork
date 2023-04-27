<template>
    <div class="page4">
        <div class="box">
            <van-field v-model="text" class="input" />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            text: '哈哈哈',
            width: window.innerWidth,
            height: window.innerHeight,
            lastX: 0,
            lastY: 0,
            isMouseMove: false,
        }
    },
    methods: {
        sgin () {
            let { dom, ctx } = this.clearCanvas()
            let down = (e) => {
                this.isMouseMove = true
                this.lastX = e.pageX
                this.lastY = e.pageY
            }
            let move = (e) => {
                if (this.isMouseMove) {
                    this.drawLine(e.pageX - dom.offsetLeft, e.pageY - dom.offsetTop, true, ctx)
                }
            }
            let up = (e) => {
                this.isMouseMove = false
            }
            let mobileStatus = (/Mobile|Android|iPhone/i.test(navigator.userAgent))
            dom.addEventListener(mobileStatus ? 'touchstart' : 'mousedown', down)
            dom.addEventListener(mobileStatus ? 'touchmove' : 'mousemove', move)
            dom.addEventListener(mobileStatus ? 'touchend' : 'mouseup', up)
        },
        drawLine (x, y, is, ctx) {
            if (this.isMouseMove && is) {
                ctx.beginPath()
                ctx.lineWidth = 2
                ctx.strokeStyle = 'skyblue'
                ctx.lineCap = 'round'
                ctx.lineJoin = 'round'
                ctx.moveTo(this.lastX, this.lastY)
                ctx.lineTo(x, y);
                ctx.stroke()
                ctx.closePath()
            }
            this.lastX = x
            this.lastY = y
        },
        render (text) {
            let { ctx } = this.clearCanvas()
            ctx.fillStyle = 'rgba(0, 0, 0, 0)'
            ctx.fillRect(0, 0, this.width, this.height)
            // 设置字体
            ctx.font = '40px serif'
            // 字体颜色
            ctx.fillStyle = '#333'
            // 显示字体
            ctx.fillText(text, 2, 300)
        },
        clearCanvas () {
            let canvasDom = document.querySelector('canvas')
            canvasDom.width = this.width
            canvasDom.height = this.height
            let ctx = canvasDom.getContext('2d')
            return {
                dom: canvasDom,
                ctx
            }
        }
    },
    mounted () {
        this.$nextTick(() => {
            let canvasDom = document.createElement('canvas')
            canvasDom.width = this.width
            canvasDom.height = this.height
            document.querySelector('.page4').appendChild(canvasDom)
            this.sgin()
        })
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && this.text) this.render(this.text)
        })
    }
}
</script>

<style lang="scss" scoped>
.page4 {
    width: 100%;
    height: 100%;
    background-color: tan;
    overflow: hidden;
    position: relative;
    .box {
        width: auto;
        height: auto;
        padding: 10px;
        position: absolute;
        left: 50%; bottom: 50px;
        transform: translateX(-50%);
        .input {
            background: rgba(0, 0, 0, 0);
            border-bottom: 2px solid #fff;
        }
    }
}
</style>