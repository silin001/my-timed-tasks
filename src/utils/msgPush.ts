/*
 * @Date: 2024-04-12 17:19:40
 * @LastEditTime: 2024-04-13 13:47:05
 * @Description:
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\utils\msgPush.ts
 */

import { httpGet } from "../http/index";
import { getStyleString, xtsBgStyle, xtsBgStyle2 } from "../utils/index";

/** 虾推啥服务推送到微信
 *  get请求地址：'https://wx.xtuis.cn/您的token.send?text=黄金大涨&desp=黄金大涨100元'
 *
 */
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
export function zipPackLogs(msgList: string[], type: number = 1) {
  const [m1, m2 ] = msgList;
  // 终端打印
  const cmdMsg = `
      <====== github 定时任务 ======>
                cicd ......
      <====== github 定时任务 ======>
      `;
  const wxMsg = `
        <div style="${getStyleString(xtsBgStyle)}">
          <div> <font color="red">${m1}</font> </div>
          <div> <h1 color="red">${m2}</h1> </div>
        </div>
        <div style="${getStyleString(xtsBgStyle2)}">
          <div>服务地址:  <a href="https://github.com/silin001/my-timed-tasks">my-timed-tasks</a>  </div>
          <div>服务作者:  尖椒土豆sss</div>
        </div>
      `;
  // const wxMsg = `
  //       <div style="${getStyleString(xtsBgStyle)}">
  //         <div>当前项目名称: <font color="red">${projectName}</font> </div>
  //         <div>插件名称: <font color="red">${name}</font> </div>
  //         <div>插件版本: <font color="red">${version}</font> </div>
  //         <div>打包输出路径: <font color="red">${outputFilePath}</font> </div>
  //         <div>打包目标目录: ${targetDir}</div>
  //         <div>打包完成时间: ${doneTime}</div>
  //       </div>
  //       <div style="${getStyleString(xtsBgStyle2)}">
  //         <div>服务地址:  <a href="https://github.com/silin001/my-timed-tasks">my-timed-tasks</a>  </div>
  //         <div>服务作者:  尖椒土豆sss</div>
  //       </div>
  //     `;
  // 使用  { [key: number]: string } 告诉ts logs对象的 key是number类型
  const logs: { [key: number]: string } = {
    1: cmdMsg,
    2: wxMsg,
  };
  return logs[type];
}
