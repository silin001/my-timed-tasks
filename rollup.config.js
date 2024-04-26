// rollup 默认仅支持es6的模块, 本工程很多地方使用了node相关模块，是基于commonjs就需要插件来读取，
import commonjs from '@rollup/plugin-commonjs'; // 将 common js 模块转成es6
// 让rollup支持 ts
import typescript from '@rollup/plugin-typescript';
// rollup 并不知道如何寻找路径以外的依赖如 node_module 中的依赖。 所以需要借助 @rollup/plugin-node-resolve 插件帮助程序可以在项目依赖中找到对应文件。
import { nodeResolve } from '@rollup/plugin-node-resolve';
// 代码打包混淆
import terser from '@rollup/plugin-terser';
// import { pluginZipPackRollup } from 'test-plugin-zip-pack'
// import { test, pluginZipPackRollup } from 'test-plugin-zip-pack';
import { test, pluginZipPackRollup } from 'test-plugin-zip-pack';

console.log('🚀🚀 ~ test:', test)
// const { pluginZipPackRollup } = pkg;
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
      // pluginZipPackRollup({
      //   optZipName: 'dist',
      //   isPackagingTime: false
      // }),
      // 将 CommonJS规范 转换成 ES2015
      commonjs(),
      // 让rollup 支持打包ts代码,并可以指定ts代码打包过程中的相关配置
      typescript({ exclude: 'node_modules' }),
      nodeResolve({
        // 指定是否优先使用 Node.js 内置模块。如果设置为 true，当导入的模块与 Node.js 内置模块同名时，会优先使用内置模块。
        preferBuiltins: false,
        // 用于指定是否将导入的模块路径映射到浏览器版本的路径,当设置为 `true` 时，该插件会尝试将模块路径转换为适用于浏览器环境的路径。
        browser: true,
        // exportConditions: ['node'],
      }),
      terser()
    ],
     // 标记为外部依赖，不要将其打包进最终的输出文件中
    external: ['http'],
    ignore: [
      "node_modules/**" // 忽略目录
    ]
  },
]
