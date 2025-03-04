import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'



const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: 'en-US',
  base: '/BirghtSpace_DMS/',
  title: ' ',
  description: ' ',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }],
    ['title', {}, 'BrightSpace'],
  ],
  theme: defaultTheme({
    logo: '/images/brightspace logo horizontal color 300CMYK.png',
    repo: 'sebastianneu/BirghtSpace_DMS',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',
    
    navbar : [
     { text: 'Home', link: '/',},
    //  { text: 'Guide', link:'/get-started',},
    //  { text: 'Examples', link:'/examples/examples'},
     { text: 'BrightSpace database and monitoring system', 
      children: [
        
        'guide/overview.md',
        'guide/indicator.md',
        'guide/safe.md',
        'guide/jos.md',
        // 'guide/.md',
  
      ]
    },

    ],
    sidebar: {
      '/guide/': [
        {
          text: 'BrightSpace database and monitoring system',
          title: 'Group 1',
          collapsible: false,
          sidebarDepth: 2, 
          children: [
            '/guide/overview.md',
            '/guide/indicator.md',
            '/guide/safe.md',
            '/guide/jos.md',
          ],
        },
      ],
    },

  }),

  plugins: [
    searchPlugin(),
    shikiPlugin({
      theme: 'github-dark',  // 选择主题
      langs: ['js', 'html', 'css','md'], // 指定语言
    }),
    
    registerComponentsPlugin({
      components: {
        Footer: path.resolve(__dirname, '.components/Footer.vue'),
      },
    }),
  
  ],

  bundler: viteBundler(),
})
