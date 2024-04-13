/*
 * @Date: 2024-04-11 09:52:14
 * @LastEditTime: 2024-04-13 13:53:43
 * @Description:
 * @FilePath: \yike-design-devd:\web_si\my_webDemo\my-projectFrame\my-timed-tasks\src\http\index.ts
 */

// const http = require("http");
import http from 'http'

export const httpGet = (api:string) => {
  return new Promise((resolve, reject) => {
    http
      .get(api, (res) => {
        let bufferData;
        res.on("data", (chunk) => {
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
