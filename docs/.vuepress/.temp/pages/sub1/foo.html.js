import comp from "C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/sub1/foo.html.vue"
const data = JSON.parse("{\"path\":\"/sub1/foo.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Foo in sub1\",\"slug\":\"foo-in-sub1\",\"link\":\"#foo-in-sub1\",\"children\":[]}],\"git\":{\"updatedTime\":1729773561000,\"contributors\":[{\"name\":\"Xinxin Yang\",\"email\":\"xinxin.yang@thuenen.de\",\"commits\":1}]},\"filePathRelative\":\"sub1/foo.md\"}")
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
