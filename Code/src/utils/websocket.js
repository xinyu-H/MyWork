const app = require("express")()
const server = require("http").Server(app)
const WebSocket = require("ws")
const MyWs = new WebSocket.Server({ port: 8080 });

MyWs.on("open", () => {
    console.log("哈哈哈")
})

MyWs.on("close", () => {
    console.log("disconnected")
})

MyWs.on("message", () => {
    console.log(123)
})

let run = null
MyWs.on("connection", (ws, req) => {
    const port = req.connection.remotePort
    const clientName = port
    console.log(`${clientName} is connected`)
    // 发送欢迎信息给客户端
    ws.send("Welcome :" + clientName + "加入聊天室")
    // ws.on("message", (message) => {
    //     clearInterval(run)
    //     // 广播消息给所有客户端
        MyWs.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                // Buffer编码转格式
                // let msgText = message.toString(['UTF-8']).split('吗？')[0]
                let msgText = '我来了'
                run = setInterval(() => {
                    client.send(clientName + " -> " + msgText)
                }, 5000)
            }
        })
    // })
})
// app.get("/", (req, res) => {
//     res.sendfile(__dirname + "/index.html")
// })

// app.listen(3000)