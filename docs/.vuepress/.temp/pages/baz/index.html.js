import comp from "C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/baz/index.html.vue"
const data = JSON.parse("{\"path\":\"/baz/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Test 0\",\"slug\":\"test-0\",\"link\":\"#test-0\",\"children\":[]},{\"level\":2,\"title\":\"Test 1\",\"slug\":\"test-1\",\"link\":\"#test-1\",\"children\":[{\"level\":3,\"title\":\"Test 1.1\",\"slug\":\"test-1-1\",\"link\":\"#test-1-1\",\"children\":[]}]}],\"git\":{\"updatedTime\":1729781272000,\"contributors\":[{\"name\":\"Xinxin Yang\",\"email\":\"xinxin.yang@thuenen.de\",\"commits\":1}]},\"filePathRelative\":\"baz/README.md\"}")
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
