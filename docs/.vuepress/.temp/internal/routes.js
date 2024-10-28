export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/baz/", { loader: () => import(/* webpackChunkName: "baz_index.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/baz/index.html.js"), meta: {"title":""} }],
  ["/examples/examples.html", { loader: () => import(/* webpackChunkName: "examples_examples.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/examples/examples.html.js"), meta: {"title":"Markdown Extension Examples"} }],
  ["/sub1/bar.html", { loader: () => import(/* webpackChunkName: "sub1_bar.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/sub1/bar.html.js"), meta: {"title":""} }],
  ["/sub1/foo.html", { loader: () => import(/* webpackChunkName: "sub1_foo.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/sub1/foo.html.js"), meta: {"title":""} }],
  ["/sub2/bar.html", { loader: () => import(/* webpackChunkName: "sub2_bar.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/sub2/bar.html.js"), meta: {"title":""} }],
  ["/sub2/foo.html", { loader: () => import(/* webpackChunkName: "sub2_foo.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/sub2/foo.html.js"), meta: {"title":"Foo in sub2"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/yang_x/2024/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
