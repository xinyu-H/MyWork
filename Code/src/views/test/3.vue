<template>
    <div>
        <h2>3</h2>
        <button @click="click3()">点击 3</button>
        <childPage1></childPage1>
        <childPage2></childPage2>
    </div>
</template>

<script>
import childPage1 from '../../components/3Child_1.vue'
import childPage2 from '../../components/3Child_2.vue'
export default {
    data () {
        return {

        }
    },
    components: {
        childPage1,
        childPage2,
    },
    methods: { 
        click3 () {
            this.$Bus.$emit('msg', 456)
        }
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped>

</style>