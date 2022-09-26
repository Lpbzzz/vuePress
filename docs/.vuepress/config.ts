import { defaultTheme, defineUserConfig } from "vuepress";

const config = defineUserConfig({
  lang: 'zh-CN',
  title: 'VuePress',
  description: 'Vue 驱动的静态网站生成器',
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
    lastUpdatedText: '上次更新时间',
    colorMode:'light',
    colorModeSwitch:true,
    repo:'https://github.com/Lpbzzz/vuePress.git'
  }),
});


export default config;