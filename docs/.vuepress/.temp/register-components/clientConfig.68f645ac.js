import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Footer", defineAsyncComponent(() => import("/home/caosimin/Development/BrightSpace_DMS/BrightSpace_DMS/docs/.vuepress/.components/Footer.vue")))
  },
}
