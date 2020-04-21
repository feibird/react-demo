/**
 * 
 * @param {string} fileName json文件名(不需要后缀)
 */
export function getJson(fileName) {
  const data = require("../data/" + fileName+'.json');
  return data;
}
