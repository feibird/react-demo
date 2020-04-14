import { isArray } from "../../colyst/util/TypeUtil";
/**
 * 数据提取
 * @param {Array<object>} arr
 * @param {Array||string} key
 */
export function getData(arr, key, isKey) {
  let keys = [];
  if (!isArray(arr)) {
    console.error("Error: %s (%i)", "格式错误,当前getData的arr数据必须为数组");
    return [];
  }
  isArray(key) ? (keys = key) : keys.push(key);
  return arr.map(item => {
    if (isKey) {
      let obj = {};
      keys.forEach(e => {
        obj[e] = item[e];
      });
      return obj;
    } else {
      return item[keys];
    }
  });
}

export function TreeUpate(tree, key = {}, childrenKey = "children") {
  console.log(tree);
  tree.forEach(item => {
    for (let i in key) {
      item[key[i]] = item[i];
    }
    if (item[childrenKey] && item[childrenKey].length > 0) {
      TreeUpate(item[childrenKey], key, childrenKey);
    }
  });
  return tree;
}

/**
 * 数据更改
 * @param {Array<object>} arr
 * @param {Array||string} key
 */
export function upData(arr, obj) {
  let keys = [];
  if (!isArray(arr)) {
    console.error("Error: %s (%i)", "格式错误,当前upData的arr数据必须为数组");
    return [];
  }
  return arr.map(item => {
    for (let i in obj) {
      item[obj[i]] = item[i];
    }
    return item;
  });
}

/**
 * 根据值获取相关参数
 * @param {Array<Object>} arr  数据集
 * @param {string} key         参数名
 * @param {any} value          值
 * @param {boolean} isIndex    返回值是否是下标
 * @param {boolean} is        true为值相等，false为不等
 */
export function ExtractData(arr, key, value, isIndex, is = true) {
  let arrs = isIndex ? "" : [];
  let arrs1 = isIndex ? "" : [];
  if (!isArray(arr)) {
    console.error("Error: %s (%i)", "格式错误,当前upData的arr数据必须为数组");
    return [];
  }
  arr.forEach((item, index) => {
    if (item[key] == value) {
      if (isIndex) {
        arrs = index;
      } else {
        arrs.push(item);
      }
    } else {
      if (isIndex) {
        arrs = index;
      } else {
        arrs1.push(item);
      }
    }
  });
  return is ? arrs : arrs1;
}

/**
 * 树形数据
 * @param arr           数据
 * @param childrenKey   children默认children
 * @param childrenName  子级参数Name 默认children
 * @param key           对比参数key 默认id
 * @param value         对比值
 * @param is            相等 默认true
 * @returns {[]}        返回值
 * @constructor
 */
export function TreeDataGetData(
  arr = [],
  childrenKey = "children",
  key = "id",
  value,
  is = true,
  returnArr
) {
  arr.forEach(item => {
    if (item[key] == value && is) {
      returnArr.push(item);
    } else if (item[key] != value && is == false) {
      returnArr.push(item);
    }
    if (isArray(item[childrenKey]) && item[childrenKey].length > 0) {
      TreeDataGetData(
        item[childrenKey],
        childrenKey,
        key,
        value,
        is,
        returnArr
      );
    }
  });
  return returnArr;
}

/**
 * 数组对象去重
 * @param {Array<Object>} data 数据源
 * @param {*} key 根据唯一值参数默认id
 */
export function ArrayClearRepeat(data, key = "id") {
  let hash = {};
  return data.reduce((preVal, curVal) => {
    hash[curVal[key]] = hash[curVal[key]]
      ? ""
      : (hash[curVal[key]] = true && preVal.push(curVal));
    return preVal;
  }, []);
}

export function openUrl(url, view) {
  view.location = url;
}

export default getData;
