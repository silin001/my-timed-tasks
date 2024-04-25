/*
 * @Date: 2024-04-12 17:06:54
 * @LastEditTime: 2024-04-25 17:02:40
 * @Description: 入口文件
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\index.ts
 */

// export * from './timed-tasks/index'
import { clockOut, fillOutWeeklyReport } from "./timed-tasks/index";


// 云函数中node环境里只能使用 cjs 规范导入方法
// 所以这里需要使用 module.exports 导出
module.exports = {
  clockOut,
  fillOutWeeklyReport,
};