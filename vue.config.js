module.exports = {
    outputDir: 'static',    
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/sass/_variables.scss";`  //加载全局scss文件
            }
        }
    },
    runtimeCompiler: true, //开启运行时模版编译，否则不可使用动态模版
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:3001',
                autoRewrite: true,
                ws: false
            }
        },       
        port: 3000        
    }
}