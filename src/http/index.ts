/*
 * @Date: 2024-04-11 09:52:14
 * @LastEditTime: 2024-04-15 09:17:53
 * @Description:
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\http\index.ts
 */

import http from 'http'

export const httpGet = (api:string) => {
  return new Promise((resolve, reject) => {
    http
      .get(api, (res) => {
        let bufferData : BufferSource;
        res.on("data", (chunk: BufferSource) => {
          bufferData = chunk;
        });
        res.on("end", () => {
          resolve(bufferData);
        });
      })
      .on("error", (err) => {
        console.log("Error: ", err.message);
        reject(err)
      });
  })
}
