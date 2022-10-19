import { defaultTheme,defineUserConfig } from 'vuepress';

const config = defineUserConfig({
	lang:'zh-CN',
	title:'lpb_前端知识杂烩',
	description:'build by vuepress',
	theme:defaultTheme({
		navbar:[
			{
				text:'首页',
				link:'/'
			},
			{
				text:'React',
				link:'/react'
			},
			{
				text:'TypeScript',
				link:'/typescript'
			}
		],
		sidebar:{
			'/react':[
				{
					text:'React',
					children:[ '/React/README.md' ]
				}
			],
			'/typescript':[
				{
					text:'TypeScript',
					children:[ '/TypeScript/README.md' ]
				}
			]
		},
		lastUpdatedText:'上次更新时间',
		colorMode:'light',
		colorModeSwitch:true,
		repo:'https://github.com/Lpbzzz/vuePress.git',
		editLink:false,
		backToHome:'返回首页',
		notFound:[ '似乎来到了没有知识的荒原' ],
		contributorsText:'作者'
	})
});

export default config;
