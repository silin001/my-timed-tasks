/*
 * @Date: 2024-04-12 16:53:38
 * @LastEditTime: 2024-04-13 13:46:53
 * @Description: 一些自定义定时任务
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\timed-tasks\index.ts
 */


import { xtsMsgPushWeChat, zipPackLogs } from "../utils/index";


/** 下班打卡函数 */
export const clockOut = () => {
  console.log('测试-推送下班打卡消息到微信')
  const xtsToken = "9O547m1wt4SsX2F19yHhVlxnH";

  const msgList = ["下班时间到啦！！！", "下班要打卡啊！！！"];
  zipPackLogs(msgList)
  xtsMsgPushWeChat(zipPackLogs(msgList,2), xtsToken, "下班打卡提醒！！！");
}

