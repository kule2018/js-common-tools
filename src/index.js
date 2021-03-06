/**
 * array all tool
 */
import {arrayUnique, arrayQuickSort, isArray, inArray, arrayIsRepeat} from './array/'

/** number all tools */
import {getRandomInt, toFixedDecimal, isPrice, isPrimes, getPrimes, accAdd, accSub, accMul, accDiv} from './number/'

/**
 * string all tools
 */
import {getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isPhone, isIdentityCard, sprintf} from './string/'

import {cookie} from './cookie/'
import {getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage} from './store/'

import {Timer, getMonthStartEndtDayTimestamp, getNowTimeFormat, timestampFormat, dateStr2timestamp, getWeekByDate, getWeekDaysByYearIndex, getFurtureWeeksInfo} from './date/'

import {sleep, getImageWidthHeight} from './other/'
/**
 * JS判断函数，解决80%类型判断问题
 */
import {isNumber, isBoolean, isNull, isUndefined, isObject, isFunction} from './is/'
/**
 * include all function to jsct object
 * @type {{arrayUnique: arrayUnique, arrayQuickSort: arrayQuickSort, isArray: isArray, inArray: inArray, getRandomInt: getRandomInt, toFixedDecimal: toFixedDecimal, isPrice: isPrice, isPrimes: isPrimes, getUUID: getUUID, isNullOrEmpty: isNullOrEmpty, isString: isString, isCreditCard: isCreditCard, isEmail: isEmail, isUrl: isUrl, isIdentityCard: isIdentityCard, sprintf: sprintf, cookie: cookie, getLocalStorage: getLocalStorage, setLocalStorage: setLocalStorage, getSessionStorage: getSessionStorage, setSessionStorage: setSessionStorage, Timer: Timer}}
 */
export {
  arrayUnique, arrayQuickSort, isArray, inArray, arrayIsRepeat,
  getRandomInt, toFixedDecimal, isPrice, isPrimes, getPrimes, accAdd, accSub, accMul, accDiv,
  getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isPhone, isIdentityCard, sprintf,
  cookie,
  getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage,
  Timer, getMonthStartEndtDayTimestamp, getNowTimeFormat, timestampFormat, dateStr2timestamp, getWeekByDate, getWeekDaysByYearIndex, getFurtureWeeksInfo,
  sleep, getImageWidthHeight,
  isNumber, isBoolean, isNull, isUndefined, isObject, isFunction
}

(function() {
  var JSCT = {arrayUnique, arrayQuickSort, isArray, inArray, arrayIsRepeat,
    getRandomInt, toFixedDecimal, isPrice, isPrimes, getPrimes, accAdd, accSub, accMul, accDiv,
    getUUID, isNullOrEmpty, isString, isCreditCard, isEmail, isUrl, isPhone, isIdentityCard, sprintf,
    cookie,
    getLocalStorage, setLocalStorage, getSessionStorage, setSessionStorage,
    Timer, getMonthStartEndtDayTimestamp, getNowTimeFormat, timestampFormat, dateStr2timestamp, getWeekByDate, getWeekDaysByYearIndex, getFurtureWeeksInfo,
    sleep, getImageWidthHeight,
    isNumber, isBoolean, isNull, isUndefined, isObject, isFunction}
  if (typeof window == 'undefined') {
    return
  }
  for (let i in JSCT) {
    window['js_' + i] = JSCT[i];
  }
  window.JSCT = JSCT
})()
