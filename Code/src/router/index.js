import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
        path: '/',
        name: 'Index',
        component: () => import('../views/Index'),
        meta: {
            name: ''
        }
    },{
        path: '/RunBox',
        name: 'RunBox',
        component: () => import('../views/RunBox'),
        meta: {
            name: ''
        }
    },{
        path: '/Door',
        name: 'Door',
        component: () => import('../views/Door'),
        meta: {
            name: ''
        }
    },{
        path: '/Cinema',
        name: 'Cinema',
        component: () => import('../views/Cinema'),
        meta: {
            name: ''
        }
    },{
        path: '/Cinema2',
        name: 'Cinema2',
        component: () => import('../views/Cinema2'),
        meta: {
            name: ''
        }
    },{
        path: '/DateTime',
        name: 'DateTime',
        component: () => import('../views/DateTime'),
        meta: {
            name: ''
        }
    },{
        path: '/IndexDB',
        name: 'IndexDB',
        component: () => import('../views/IndexDB'),
        meta: {
            name: ''
        }
    },{
        path: '/Table',
        name: 'Table',
        component: () => import('../views/Table'),
        meta: {
            name: ''
        }
    },{
        path: '/Css1',
        name: 'Css1',
        component: () => import('../views/Css1'),
        meta: {
            name: ''
        }
    },{
        path: '/Index1',
        name: 'Index1',
        component: () => import('../views/index1'),
        meta: {
            name: ''
        }
    },{
        path: '/Index3',
        name: 'Index3',
        component: () => import('../views/index3'),
        meta: {
            name: ''
        }
    },{
        path: '/Fitting',
        name: 'Fitting',
        component: () => import('../views/Fitting'),
        meta: {
            name: ''
        }
    },{
        path: '/Topic',
        name: 'Topic',
        component: () => import('../views/Topic'),
        meta: {
            name: ''
        }
    },{
        path: '/FilePreview',
        name: 'FilePreview',
        component: () => import('../views/FilePreview'),
        meta: {
            name: ''
        }
    },{
        path: '/WebSocket',
        name: 'WebSocket',
        component: () => import('../views/WebSocket'),
        meta: {
            name: ''
        }
    },{
        path: '/Test1',
        name: 'Test1',
        component: () => import('../views/test/1'),
        meta: {
            name: ''
        }
    },{
        path: '/Test2',
        name: 'Test2',
        component: () => import('../views/test/2'),
        meta: {
            name: ''
        }
    },{
        path: '/Snow',
        name: 'Snow',
        component: () => import('../views/Snow'),
        meta: {
            name: ''
        }
    }]
})
