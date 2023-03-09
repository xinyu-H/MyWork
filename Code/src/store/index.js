import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const moduleA = {
    state: {
        numA: 2
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
}

const moduleB = {
    state: {
        numB: 2
    },
    mutations: {

    },
    actions: {

    },
    getters: {

    },
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state:{
        globalNum: 3,
        globalStr: '侯新宇'
    },
    mutations: {
        mutationsAddGlobalNum: (state, obj) => {
            state.globalNum += obj.num
        }
    },
    actions: {
        actionAddGlobalNum: ({ commit }, obj) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('mutationsAddGlobalNum', obj)
                    resolve()
                }, 500)
            })
        },
        async actionA ({state, commit, dispatch}) {
            commit('mutationsAddGlobalNum', await getDate())
        },
        async actionB ({state, commit, dispatch}) {
            await dispatch('actionA')
            commit('mutationsAddGlobalNum', await getOtherDate())
        }
    },
    getters: {
        getterGlobalNum: (state) => {
            return state.globalNum
        }
    }
})

function getDate () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({num: 10})
        }, 300)
    })
}
function getOtherDate () {
    return new Promise((resolve, reject) => {
        resolve({num: 20})
    })
}

export default store