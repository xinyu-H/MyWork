<template>
    <div>
        globalNum: {{ $store.state.globalNum }}---{{ globalNum }}---{{ getterGlobalNum }}
        <button @click="mutationsAddGlobalNum({num: 1})">mutationsAddGlobalNum</button>
        <button @click="actionB">actionAddGlobalNum</button>

    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
    data () {
        return {

        }
    },
    computed: {
        ...mapState(['globalNum']),
        ...mapGetters(['getterGlobalNum'])
    },
    methods: {
        // mutationsAddGlobalNum () {
        //     this.$store.commit('mutationsAddGlobalNum', {
        //         num: 1
        //     })
        // },
        ...mapMutations(['mutationsAddGlobalNum']),
        // actionAddGlobalNum () {
        //     this.$store.dispatch('actionAddGlobalNum', {
        //         num: 2
        //     }).then(res => {
        //         console.log(this.globalNum)
        //     })
        // },
        ...mapActions(['actionAddGlobalNum', 'actionB']),
        // getterGlobalNum () {
        //     console.log(this.$store.getters.getterGlobalNum)
        // },
    },
    mounted () {
        console.log(this.$store)

    }
}
</script>

<style lang="scss" scoped>

</style>