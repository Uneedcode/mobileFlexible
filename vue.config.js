module.exports = {
  //反向代理的配置
  //   devServer: {
  //     proxy: {
  //       // '/api': {
  //       //     target: 'http://m.maoyan.com',//目标地址
  //       //     ws: true,  是否启用websockets
  //       //     changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
  //       //     pathRewrite: {'^/api': '/'}    //这里重写路径
  //       // }
  //     },
  //   },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 换算的基数 默认为37.5，一般不建议修改它，使用vant ui框架中也是默认37.5
            rootValue: 37.5,
            // 忽略转换正则匹配项，插件会转化所有的样式的px。比如引入了三方UI，也会被转化.
            //项目中有不需要自动转换成PX的样式，就在此添加，如: .vant  表示 .vant 开头的都不会转换
            selectorBlackList: [],
            propList: ["*"], //属性的选择器，*表示通用
          }),
        ],
      },
    },
  },
};
