<template>
    <div>
        <div class="outer">outer
            <div class="inter">inter</div>
        </div>
        <br>
        <button @click="addHelloWorldNum">点击HelloWorldNum++</button>
        <HelloWorld ref="helloWorld" @fun="fun" :n="123"></HelloWorld>
    </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        HelloWorld
    },
    methods: {
        addHelloWorldNum () {
            // console.log(this.$refs.helloWorld)
            this.$refs.helloWorld.addHelloWorldNum()
        },
        fun (val) {
            console.log(val)
            val()
        },
        /**
         * 手写instanceOf
         * @param {实例} obj 
         * @param {类名} className 
         */
        myinstanceOf (obj, className) {
            let proto = Object.getPrototypeOf(obj)
            let prototype = className.prototype
            while (true) {
                if (proto === null) return false;
                if (proto === prototype) return true;
                proto = Object.getPrototypeOf(proto)
            }
        }
    },
    mounted () {
        // function Test () {}
        // let test1 = new Test()
        // let test2 = {}
        // console.log(this.myinstanceOf(test2, Test))

        /**
         * 手写myCall
         * @param {对象} context 
         * @param  {...any 参数列表} args
         */
        Function.prototype.myCall = function (context, ...args) {
            // 判空
            context = context || window
            args = args || []
            // 复制 fn 为当前this 函数
            context.fn = this
            // 添加参数
            const result = context.fn(...args)
            // 删除 fn 防止环境污染
            delete context.fn
            // 返回结果
            return result
        }
        function fn (a, b, c) {
            console.log(this.name, a, b, c)
        }
        let obj = {
            name: '侯'
        }
        fn.myCall(obj, 1, 2, 3)
        // 手写 myApply同上 把 ...args 去掉... 扩展即可

        document.querySelector('.inter').outerHTML = '<p>123</p>'
    }
}
</script>

<style lang="scss" scoped>

</style>