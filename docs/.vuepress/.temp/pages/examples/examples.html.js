import comp from "C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/examples/examples.html.vue"
const data = JSON.parse("{\"path\":\"/examples/examples.html\",\"title\":\"Markdown Extension Examples\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Syntax Highlighting\",\"slug\":\"syntax-highlighting\",\"link\":\"#syntax-highlighting\",\"children\":[]},{\"level\":2,\"title\":\"Custom Containers\",\"slug\":\"custom-containers\",\"link\":\"#custom-containers\",\"children\":[]},{\"level\":2,\"title\":\"Emoji\",\"slug\":\"emoji\",\"link\":\"#emoji\",\"children\":[]},{\"level\":2,\"title\":\"More\",\"slug\":\"more\",\"link\":\"#more\",\"children\":[]}],\"git\":{\"updatedTime\":1729773561000,\"contributors\":[{\"name\":\"Xinxin Yang\",\"email\":\"xinxin.yang@thuenen.de\",\"commits\":1}]},\"filePathRelative\":\"examples/examples.md\"}")
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
