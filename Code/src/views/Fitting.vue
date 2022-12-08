<template>
    <div class="FittingPage">
        <div class="shirt">
            <img src="@/assets/img/Fitting/t-shirt.png" loading="lazy">
            <div class="shirt__overlay">
                <div class="shirt__overlay__pattern" :style="{backgroundImage: `url(${bgImg})`}"></div>
                <img src="@/assets/img/Fitting/t-shirt-overlay-70c.png">
            </div>
        </div>
        <div class="preview">
            <li v-for="(v, i) in imgList" :key="i" @click="(bgImg = v.src)">
                <img :src="v.src" alt="">
            </li>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Fitting',
    data() {
        return {
            imgList: [{
                src: require('@/assets/img/Fitting/swatch1-preview.png')
            }, {
                src: require('@/assets/img/Fitting/swatch2-preview.png')
            }, {
                src: require('@/assets/img/Fitting/swatch3-preview.png')
            }, {
                src: require('@/assets/img/Fitting/swatch4-preview.png')
            }, {
                src: require('@/assets/img/Fitting/swatch5-preview.png')
            }, {
                src: require('@/assets/img/Fitting/swatch6-preview.png')
            }, {
                src: require('@/assets/img/Fitting/swatch7-preview.png')
            }, {
                src: require('@/assets/img/Fitting/swatch8-preview.png')
            }],
            bgImg: '',
        }
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
.FittingPage {
    background: #404749;
    background: radial-gradient(#404749 0%, #404749 85%, #303535);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .shirt {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 100vw;
            text-align: center;
            color: white;
            font-size: 18px;
            font-weight: bold;
        }
        img {
            max-height: 80%;
            max-width: 80%;
            margin: auto;
            position: relative;
        }
        .shirt__overlay {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                mix-blend-mode: multiply;
            }
            .shirt__overlay__pattern {
                position: absolute;
                top: 0%; 
                width: 80%;
                height: 100%;
                -webkit-mask-image: url(../assets/img/Fitting/shirt-mask.png);
                mask-image: url(../assets/img/Fitting/shirt-mask.png);
                -webkit-mask-size: contain;
                mask-size: contain;
            }
        }
    }
    .preview {
        position: absolute;
        top: 4px;left: 0;
        width: 100%;
        height: auto;
        // display: flex;
        // flex-wrap: wrap;
        li {
            width: .5rem;
            height: .5rem;
            background-color: tan;
            border-radius: 50%;
            overflow: hidden;
            margin: 6px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        @media (min-width: 600px) {
            li {
                width: .35rem;
                height: .35rem;
            }
        }
        @media (min-width: 900px) {
            li {
                width: .2rem;
                height: .2rem;
            }
        }
    }
}
</style>