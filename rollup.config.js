// rollup 默认仅支持es6的模块, 本工程很多地方使用了node相关模块，是基于commonjs就需要插件来读取，
import commonjs from '@rollup/plugin-commonjs'; // 将 common js 模块转成es6
// 让rollup支持 ts
import typescript from '@rollup/plugin-typescript';
// rollup 并不知道如何寻找路径以外的依赖如 node_module 中的依赖。 所以需要借助 @rollup/plugin-node-resolve 插件帮助程序可以在项目依赖中找到对应文件。
import nodeResolve from '@rollup/plugin-node-resolve';
// import { pluginZipPackRollup } from 'plugin-zip-pack'
import { pluginZipPackRollup } from 'test-plugin-zip-pack'

export default [
  {
    input: './src/index.ts', // 打包的入口文件
    // 同时打包多种规范的产物
    output: [
      {
        file: 'dist/index.umd.js', // 打包出口
        // umd是兼容 cjs/esm/iife/amd/cmd/ 的通用打包格式
        format: 'umd',
        name: 'myTimedTasks', // 指定打包后的全局变量名
        // sourcemap: true,
        globals: {
          // 你的模块名: 全局变量名
          'http': 'node_http',
        },
      },
    ],
    plugins: [
      pluginZipPackRollup({
        optZipName: 'dist',
        isPackagingTime: false
      }),
      // 将 CommonJS规范 转换成 ES2015
      commonjs(),
      nodeResolve(),
      // 让rollup 支持打包ts代码,并可以指定ts代码打包过程中的相关配置
      typescript()
      // nodeResolve({
      //   exportConditions: ['node'],
      //   preferBuiltins: false,
      // }),
      // typescript({ exclude: 'node_modules' }),
    ],
    // external: ['process', 'os', 'tty'],
    ignore: [
      "node_modules/**" // 忽略目录
    ]
  },
]
