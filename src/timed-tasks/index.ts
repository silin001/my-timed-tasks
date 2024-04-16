/*
 * @Date: 2024-04-12 16:53:38
 * @LastEditTime: 2024-04-15 16:03:19
 * @Description: 一些自定义定时任务
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\timed-tasks\index.ts
 */


import { xtsMsgPushWeChat, zipPackLogs } from "../utils/index";


/** 下班打卡函数 */
export const clockOut = (xtsToken: string) => {
  console.log("云函数-推送下班打卡消息到微信");
  const msgList = ["下班时间到啦！！！", "下班要打卡啊！！！"];
  xtsMsgPushWeChat(zipPackLogs(msgList), xtsToken, "【下班-企微打卡提醒！】");
};
/** 每周4、5提醒 填写周报函数 */
export const fillOutWeeklyReport = (xtsToken: string) => {
  console.log("云函数-每周4、5提醒填写周报消息到微信");
  const msgList = ["马上周末了写周报啦！！！", "该写周报啦！！！"];
  xtsMsgPushWeChat(zipPackLogs(msgList), xtsToken, "【oa系统填写周报啦!】");
};

