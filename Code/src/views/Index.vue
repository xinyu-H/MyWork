<template>
    <div class="IndexPage">
        <div class="content">
            <li v-for="(item, index) in itemList" :key="index" :class="{'mouseover': index == mouseoverIndex}"
            @click="jumpPage(item)" @mouseover="mouseoverLi(item, index)" @mouseout="mouseoverIndex = itemList.length+1">
                {{ item.name }}
            </li>
        </div>
    </div>
</template>

<script>
import routerList from '@/router'
export default {
    name: 'Index',
    data() {
        return {
            itemList: [],
            mouseoverIndex: 0
        }
    },
    methods: {
        jumpPage(item) {
            this.$router.push(item.name)
        },
        mouseoverLi(item, index) {
            this.mouseoverIndex = index;
        },
        async test () {
            console.log(1)
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(2)
                    resolve(3)
                }, 0);
            }).then(res => {
                console.log(res)
            })
            console.log(4)
        }
    },
    mounted() {
        this.itemList = routerList.options.routes.slice(1, routerList.options.routes.length);
        this.mouseoverIndex = this.itemList.length + 1;

        this.test()
    }
}
</script>

<style lang="scss" scoped>
.IndexPage {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    .content {
        width: 90%;
        max-height: 90%;
        min-height: 50%;
        padding: 10px;
        position: absolute;
        top: 50%;left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 1.5%;
        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075), 0 0 20px rgba(150, 150, 150, 0.6);
        // background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
        overflow: auto;
        backdrop-filter: blur(5px);
        background: url('../assets/img/Index/2057677.jpg');
        background-size: 100% 100%;
        li {
            padding: .05rem;
            margin: 10px 2px;
            border-radius: 5px;
            box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 0, 0, 0.7);
            background-color: rgba(0, 0, 0, 0.5);
            font-weight: 800;
            font-size: .13rem;
            color: #5279a0;
            cursor: pointer;
            transition: transform .3s;
        }
        .mouseover {
            transition: transform .3s;
            transform: scale(.9);
        }
    }
    // .content::before {
    //     content: "";
    //     width: 100%;
    //     height: 100%;
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    //     background: inherit;
    //     filter: blur(2px);
    //     /*为了模糊更明显，调高模糊度*/
    //     z-index: -1;
    // }
    @media (min-width: 900px) {
        .content {
            width: 70%;
            li {
                font-size: .08rem;
            }
        }
    }
}
</style>