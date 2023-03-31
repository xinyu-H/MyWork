<template>
    <div class="page1">
        <div class="upload">
            <img src="https://img.yzcdn.cn/vant/leaf.jpg" alt="">
            <input type="file" @change="inputChange($event)" >
        </div>
        <img v-if="uploadSrc" :src="uploadSrc" alt="" style="width:1rem;height:1rem;">
        <div class="outer" @scroll="scrollDiv($event)">
            <div class="inter"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                uploadSrc: ''
            }
        },
        methods: {
            scrollDiv(e) {
                console.log(e.target.scrollTop , e.target.offsetHeight)
            },
            inputChange(e) {
                let fileData = e.target.files[0]
                this.$Utils.Tools.toBase64(fileData).then(res => { 
                    this.uploadSrc = res
                })
            },
            toBase64 (fileData) {
                return new Promise((resolve, reject) => {
                    let reader = new FileReader()
                    reader.readAsDataURL(fileData)
                    reader.onload = function () {
                        resolve(this.result)
                    }
                })
            },
            myPromise () {
                return class Promise {
                    constructor (executor) {
                        this.state = 'pending'
                        this.value = undefined
                        this.reason = undefined
                        this.then = (onFulfilled, onRejected) => {
                            if (this.state === 'fulfilled') onFulfilled(this.value)
                            if (this.state === 'rejected') onRejected(this.reason)
                        }
                        let resolve = value => {
                            if (this.state === 'pending') {
                                this.state = 'fulfilled'
                                this.value = value
                            }
                        }
                        let reject = reason => {
                            if (this.state === 'pending') {
                                this.state = 'rejected'
                                this.reason = reason
                            }
                        }
                        try {
                            executor(resolve, reject)
                        } catch (err) {
                            reject(err)
                        }
                    }
                }
            },
            myPromise2 (fun) {
                let state = 'pending'
                let value = undefined
                let reason = undefined
                let resolve = (valueD) => {
                    if (state === 'pending') {
                        state = 'fulfilled'
                        value = valueD
                    }
                }
                let reject = (reasonD) => {
                    if (state === 'pending') {
                        state = 'rejected'
                        reason = reasonD
                    }
                }
                try {
                    fun (resolve, reject)
                } catch (e) {
                    reject(e)
                }
                // console.log(new Function.prototype)
                Object.prototype.then = (fulfillFun, rejectFun) => {
                    if (state === 'fulfilled') fulfillFun(value)
                    if (state === 'rejected') rejectFun(reason)
                }
            },
        },
        mounted () {
            // let myP = this.myPromise()
            // new myP((resolve, reject) => {
            //     resolve(123)
            // }).then((res) => {
            //     console.log(res)
            // })
            // let myp2 = new this.myPromise2((resolve, reject) => {
            //     resolve(456)
            // }).then(res => {
            //     console.log(res)
            // })
        }
    }
</script>

<style lang="scss" scoped>
.page1 {
    width: 100%;
    height: 100%;
}
.upload {
    position: relative;
    width: 1rem;
    height: 1rem;
    img, input {
        width: 100%;
        height: 100%;
    }
    input {
        position: absolute;
        top: 0;left: 0;
        opacity: 0;
    }
}
.outer {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    overflow: auto;
    .inter {
        width: 100%;
        height: 500px;
        background-color: pink;
    }
}
</style>