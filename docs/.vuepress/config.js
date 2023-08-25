module.exports = {
    title: 'My blog',
    description: 'A blog powered by VuePress',
    base: '/wbr1224.github.io/',
    theme: 'reco',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig:{
        nav:[
            {text: '首页', link: '/'},
            {
                text: 'Wbr的博客', 
                items: [
                    {text:'github', link: 'https://github.com/wbr1224'},
                    {text:'gitee', link: 'https://gitee.com/wbr1224'}
                ]
            }
        ]
    }
}