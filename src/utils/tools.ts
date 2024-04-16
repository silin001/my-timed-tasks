/*
 * @Date: 2024-04-12 17:20:56
 * @LastEditTime: 2024-04-15 12:30:07
 * @Description:
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\utils\tools.ts
 */




// 辅助函数，将样式对象转换为字符串
export function getStyleString (styleObj: { [key : string]: string}) {
  return Object.keys(styleObj)
    .map(key => `${key}:${styleObj[key]}`)
    .join(';');
}
