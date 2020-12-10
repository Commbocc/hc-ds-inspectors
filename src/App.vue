<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from '@/store'
import { createRouter } from '@/router'

export default {
  install(Vue) {
    Vue.prototype.$store = new Vue(store)

    Vue.component('HcDsInspectors', {
      ...this,
      router: createRouter(Vue),
    })
  },
}
</script>
