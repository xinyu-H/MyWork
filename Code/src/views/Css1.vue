<template>
    <div class="css1">
        <div class="text">
            <p>生活不可能像你想象得那么好</p>
            <p>但也不会像你想象得那么糟</p>
            <p>我觉得人的脆弱和坚强都超乎自己的想象</p>
            <p>有时我可能脆弱得一句话就泪流满面</p>
            <p>有时也发现自己咬着牙走了很长的路</p>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    name: 'Css1',
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    methods: {
        
    },
    async mounted () {
        
    }
}

</script>

<style lang="scss">
    .css1 {
        width: 100%;
        height: 100%;
        padding: 1rem .8rem;
        background: url(../assets/img/Index/2057677.jpg);
        color: rgba(46, 46, 46, 0.8);
        font-weight: 800;
        // background-size: 100%;
        >.text {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            >p {
                width: .1rem;
                font-size: .22rem;
            }
            >p:nth-child(2) {
                padding-top: .29rem;
            }
            >p:nth-child(3) {
                padding-top: .58rem;
            }
            >p:nth-child(4) {
                padding-top: .875rem;
            }
            >p:nth-child(5) {
                padding-top: 1.17rem;
            }
        }
    }
</style>