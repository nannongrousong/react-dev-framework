module.exports = {
    port: 9000,
    dev: 'development',
    prod: 'production',
    entries: [{
        name: 'app',
        entry: 'src/app/index.js',
        title: 'Demo',
        template: 'src/app/index.html',
        favicon: 'src/app/favicon.ico'
    }],
    proxy: [{
        //  拦截的路由匹配
        router: '/api',
        //  目标服务器
        target: 'http://localhost:10001',
        //  路由重写规则
        pathRewrite: { '^/app/api': '/' }
    }]
}