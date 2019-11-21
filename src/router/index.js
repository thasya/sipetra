import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Beranda/Beranda.vue')
  },
  {
    path:'/masterdata',
    name:'masterdata',
    component: () => import(/* webpackChunkName: "about" */ '../views/Masterdata/Masterdata.vue')
  },
  {
    path: '/tablepenempatanpelita',
    name: 'tablepenempatanpelita',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tablepenempatanpelita/Tablepenempatanpelita.vue')
  },
  {
    path: '/tablepenempatan',
    name: 'tablepenempatan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tablepenempatan/Tablepenempatan.vue')
  },
  {
    path: '/tablepenempatantahun',
    name: 'tablepenempatantahun',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tablepenempatantahun/Tablepenempatantahun.vue')
  },
  {
    path: '/tablepemukiman',
    name: 'tablepemukiman',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tablepemukiman/Tablepemukiman.vue')
  },
  {
    path: '/tableguru',
    name: 'tableguru',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tableguru/Tableguru.vue')
  },
  {
    path: '/tablependidikan',
    name: 'tablependidikan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tablependidikan/Tablependidikan.vue')
  },
  {
    path: '/tableperabotansd',
    name: 'tableperabotansd',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tableperabotansd/Tableperabotansd.vue')
  },
  {
    path: '/tableinventaris',
    name: 'tableinventaris',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tableinventaris/Tableinventaris.vue')
  },
  {
    path: '/tableagama',
    name: 'tableagama',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table/Tableagama/Tableagama.vue')
  },
  {
    path: '/formguru',
    name: 'formguru',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form/Formguru/Formguru.vue')
  },
  {
    path: '/formpendidikan',
    name: 'formpendidikan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form/Formpendidikan/Formpendidikan.vue')
  },
  {
    path: '/formperabotansd',
    name: 'formperabotansd',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form/Formperabotansd/Formperabotansd.vue')
  },
  {
    path: '/formpenempatanpelita',
    name: 'formpenempatanpelita',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form/Formpenempatanpelita/Formpenempatanpelita.vue')
  },
  {
    path: '/cetak',
    name: 'cetak',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tombol/Cetak/Cetak.vue')
  },
  {
    path: '/export',
    name: 'export',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tombol/Export/Export.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
