/*
 * @Date: 2024-04-12 17:19:40
 * @LastEditTime: 2024-04-15 16:59:31
 * @Description:
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\utils\msgPush.ts
 */

import { httpGet } from "../http/index";
import { xtsBgStyle, xtsBgStyle2 } from "../utils/constant";
import { getStyleString } from "../utils/tools";

export async function xtsMsgPushWeChat(
  content: string,
  token: string,
  titleStr?: string
) {
  const api = `http://wx.xtuis.cn/${token}.send`; // 完整服务接口
  const title = titleStr || "【个人定时任务推送】";
  const fullUrl = `${api}?text=${title}&desp=${content}`; // 拼接对应get请求参数
  const res = (await httpGet(fullUrl)) as Buffer; // 结果肯定是buffer类型数据 所以用as 断言一下
  // 这里接口请求到的是 buffer类型数据，方便查看需要转换一下
  const strData = res.toString();
  console.log("消息推送接口调用结果：", strData);
}

/** 日志打印 */
export function zipPackLogs(msgList: string[]) {
  const [m1, m2 ] = msgList;
  const wxMsg = `
        <div style="${getStyleString(xtsBgStyle)}">
          <div> <font color="red">${m1}</font> </div>
          <div> <h1 color="red">${m2}</h1> </div>
        </div>
        <div style="${getStyleString(xtsBgStyle2)}">
          <div>服务类型:  云函数推送</div>
          <div>源码地址:  <a href="https://github.com/silin001/my-timed-tasks">my-timed-tasks</a>  </div>
          <div>源码作者:  尖椒土豆sss</div>
        </div>
      `;
  return wxMsg;
}
