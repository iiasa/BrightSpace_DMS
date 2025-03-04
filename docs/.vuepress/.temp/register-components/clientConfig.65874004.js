import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Footer", defineAsyncComponent(() => import("C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/components/Footer.vue")))
  },
}
