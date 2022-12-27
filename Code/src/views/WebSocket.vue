<template>
    <div>
        <form onsubmit="return false;">
            <h3>WebSocket 聊天室：</h3>
            <textarea id="responseText" style="width: 500px; height: 300px"></textarea>
            <br />
            <input type="text" id="input" name="message" style="width: 300px" value="你好吗？"/>
            <input type="button" value="发送消息" @click="send()"/>
            <input type="button" onclick="javascript:document.getElementById('responseText').value=''" value="清空聊天记录"/>
        </form> 
    </div>
</template>

<script>
export default {
    name: "WebSocket",
    data() {
        return {
            socket: new WebSocket("ws://localhost:8080"),
            timeoutRun: null,
            intervalRun: null,
        }
    },
    methods: {
        longstart() {
            //1、通过关闭定时器和倒计时进行重置心跳
            clearInterval(this.intervalRun)
            clearTimeout(this.timeoutRun);
            // 2、每隔30s向后端发送一条商议好的数据
            this.intervalRun = setInterval(()=>{
                console.log('重置监测心跳')
                let data = { // 与后端商量好心跳要传递的值
                    content: "pong",
                    contentType: "hert"
                }
                this.socket.send(JSON.stringify(data))
                // 3、发送数据 2s后没有接收到返回的数据进行关闭websocket重连
                this.timeoutRun = setTimeout(()=>{
                    console.log("后台挂掉，没有心跳了....");
                    console.log("打印websocket的地址:", this.socket);
                    this.socket.close();
                    clearInterval(this.intervalRun)
                    clearTimeout(this.timeoutRun);
                }, 2000);
            }, 10000)
        },
        send(val) {
            let ta = document.getElementById("responseText")
            let input = document.getElementById("input")
            let sendInfo = input.value || val
            if (!window.WebSocket) {
                return
            }
            if(!sendInfo.trim()) {
                alert('不可发送空消息！')
                return
            }
            ta.value = ta.value + "\n" + input.value
            if (this.socket.readyState == WebSocket.OPEN) {
                this.socket.send(sendInfo)
                input.value = ''
            } else {
                alert("连接没有开启.")
            }
        },
        init() {
            this.socket.onopen = function (event) {
                let ta = document.getElementById("responseText")
                ta.value = "连接开启!"
                longstart()
            }
            this.socket.onmessage = (event) => {
                console.log(event)
                console.log('心跳重置')
                this.longstart();
                let ta = document.getElementById("responseText")
                ta.value = ta.value + "\n" + event.data
            }
            this.socket.onclose = function (event) {
                let ta = document.getElementById("responseText")
                ta.value = ta.value + "\n" + "连接被关闭"
            }
            this.socket.onerror = function (event) {
                console.log(event)
            }
        }
    },
    mounted () {
        if (!window.WebSocket) window.WebSocket = window.MozWebSocket
        this.init()
        document.addEventListener('keydown',(e) => {
            if(e.key === 'Enter') this.send()
        })
    }
}
</script>

<style lang="scss" scoped>

</style>