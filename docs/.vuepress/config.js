module.exports = {
    base:'/gugu-demo0/',
    title: '咕咕 UI',
    description: '一个好用的 UI 框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: 'GitHub', link: 'https://github.com/wh2887/init-ui/' },
        ],
        sidebar: [
            '/install/',
            '/get-started/',
            {
                title: '组件',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: ['/components/button',
                    '/components/button-group',
                    '/components/input',
                    '/components/grid'],
            }
        ]
    }
}
