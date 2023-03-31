<template>
    <div>
        <h2>3_1</h2>
        <button @click="click3_1()">点击 3_1</button>
        
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: { 
        click3_1 () {
            this.$Bus.$emit('msg', 456)
        }
    },
    mounted() {
        
    },
}
</script>

<style lang="scss" scoped>

</style>