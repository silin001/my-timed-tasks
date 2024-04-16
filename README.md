# my-timed-tasks

基于github actions 实现的自己一些定时任务

# 技术栈

- typeScript

- nodejs



# 项目初始化问题

由于该项目无需打包，都是一些简单的执行函数， 但是在编写源码时需要各个文件引用，为了方便就使用 es6语法： import， 但是js、ts文件默认是不支持的！

直接使用会报错：
(node:12460) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.


解决：
- npm init 创建 package.json 设置 ： "type": "module"

- 创建.mjs

node 不能直接执行 .ts文件，需要使用 ts-node 执行， 而ts-node报错， 最后使用 tsx 直接执行 ts文件


# 注意

本来想用 github actions 实现定时任务，但是github用的人太多了， github actions 不能保证准时执行，尤其是在整点或半点高峰期时，延迟问题会更严重！

所以一些要求准时准点的定时任务就不太适合了。

所以使用 rollup 将该工程最终打包，部署在自己的服务器上或者云函数上开启一个 定时触发器  来实现精准的定时任务。


# 定时任务需求

- 周1-周5 每天6点提醒下班打卡


- 每周4下午提醒写周报

