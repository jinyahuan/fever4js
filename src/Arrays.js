/**
 * Licensed under MIT (https://github.com/jinyahuan/fever4js/blob/master/LICENSE)
 *
 * @author JinYahuan
 */

(function (w) {
  "use strict";

  var _Objects = w._Objects;
  if (_Objects == undefined)
    throw '"Arrays.js" requires "Objects.js", and must be included before "Arrays.js"';

  var Arrays = {
    version: "1.0.0",

    /* ------------------------------------------------------------------------
     * function
     */

    /**
     * Checks {@param o} is array type.
     *
     * @param o
     * @returns {boolean} true if {@param o} is array type; otherwise false.
     */
    isArray: function (o) {
      return (o instanceof Array);
    },

    /**
     * Checks {@param arr} is empty(length is 0) array.
     *
     * @param arr
     * @returns {boolean} true if, and only if, {@param arr} length is 0; otherwise false.
     */
    isEmpty: function (arr) {
      return _Objects.isUndefinedOrNull(arr) ? false
                                              : arr.length == 0;
    },

  }

  // means: window._Arrays = window.common.Arrays = Arrays
  var _common = w.common || {};
  w._Arrays = _common.Arrays = Arrays;
  w.common = _common;

  return Arrays;
})(window);
