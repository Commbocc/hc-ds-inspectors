<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import inspectors from '@/inspectors'
import { createRouter } from '@/router'

export default {
  install(Vue) {
    Vue.prototype.$inspectors = new Vue(inspectors)

    Vue.component('HcDsInspectors', {
      ...this,
      router: createRouter(Vue)
    })
  }
}
</script>