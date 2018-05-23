import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import select from '@/pages/Select'
import countdown from '@/pages/countdown'
import countdown2 from '@/pages/countdown2'
import dropDown from '@/pages/dropDown'
import search from '@/pages/search'
import actionsheet from '@/pages/action-sheet'

import touchme from '@/pages/touch-me'



Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/select',
        name: 'select',
        component: select
    }, {
        path: '/countdown',
        name: 'countdown',
        component: countdown
    }, {
        path: '/dropDown',
        name: 'dropDown',
        component: dropDown
    }, {
        path: '/countdown2',
        name: 'countdown2',
        component: countdown2
    }, {
        path: '/search',
        name: 'search',
        component: search

    }, {
        path: '/actionsheet',
        name: 'actionsheet',
        component: actionsheet
    }, {
        path: '/touchme',
        name: 'touchme',
        component: touchme
    }]



})