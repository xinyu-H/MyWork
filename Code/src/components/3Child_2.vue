<template>
    <div>
        <h2>3_2</h2>
        <button>点击 3_2</button>
        
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: { 
        
    },
    mounted() {
        this.$Bus.$on('msg', res => {
            console.log(res)
        })
    },
}
</script>

<style lang="scss" scoped>

</style>