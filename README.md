# my-timed-tasks

基于github actions 实现的自己一些定时任务

## 定时任务每天6点提醒下班打卡


## 每周4下午写周报


# 注意

由于该项目无需打包，都是一些简单的执行函数， 但是在编写源码时需要各个文件引用，为了方便就使用 es6语法： import， 但是js、ts文件默认是不支持的！

直接使用会报错：
(node:12460) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.


解决：
- npm init 创建 package.json 设置 ： "type": "module"

- 创建.mjs

node 不能直接执行 .ts文件，需要使用 ts-node 执行
