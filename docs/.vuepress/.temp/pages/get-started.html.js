import comp from "C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Overview\",\"slug\":\"overview\",\"link\":\"#overview\",\"children\":[]},{\"level\":2,\"title\":\"Indicator\",\"slug\":\"indicator\",\"link\":\"#indicator\",\"children\":[]},{\"level\":2,\"title\":\"Data\",\"slug\":\"data\",\"link\":\"#data\",\"children\":[]}],\"git\":{\"updatedTime\":1730217827000,\"contributors\":[{\"name\":\"Xinxin Yang\",\"email\":\"xinxin.yang@thuenen.de\",\"commits\":3}]},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
