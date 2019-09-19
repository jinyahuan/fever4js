/**
 * Licensed under MIT (https://github.com/jinyahuan/fever4js/blob/master/LICENSE)
 *
 * @author Yahuan Jin
 */

"use strict";

/**
 * Int32 minimum value, -2^31.
 * @type {number}
 */
var INT32_MIN_VALUE = (-1 << 31);
/**
 * Int32 maximum value, 2^31 - 1.
 * @type {number}
 */
var INT32_MAX_VALUE = ((1 << 31) - 1) >>> 0;
/**
 * IPv4 maximum number value. 2^32 - 1.
 * @type {number}
 */
var IP_V4_MAX_VALUE = INT32_MAX_VALUE + (-INT32_MIN_VALUE);

function inetAton(ipv4Str, defaultValue) {
    var arr = (ipv4Str + '').split('.');
    if (arr.length == 4) {
        var num = 0;
        for (var i = 3; i >= 0; --i) {
            var ip = parseInt(arr[3 - i]);
            if (!isValidIpRange(ip)) {
                return defaultValue;
            }
            num |= ip << (i << 3);
        }
        return num >>> 0;
    }
    return defaultValue;
}

function inetNtoa(ipv4Num, defaultValue) {
    if (isNumber(ipv4Num) && isValidIpNumber(ipv4Num)) {
        var str = '';
        for (var i = 0; i < 4; ++i) {
            str = insertStr(str, 0, ipv4Num & 0xFF);
            if (i < 3) {
                str = insertStr(str, 0, '.');
            }
            ipv4Num >>= 8;
        }
        return str;
    }
    return defaultValue;
}

function isValidIpRange(num) {
    return (num >= 0) && (num <= 0xFF);
}

function isNumber(obj) {
    return (typeof obj) === 'number';
}

function isValidIpNumber(num) {
    return num >= 0 && num <= IP_V4_MAX_VALUE;
}

function insertStr(soure, offset, str) {
    return soure.slice(0, offset) + str + soure.slice(offset);
}
