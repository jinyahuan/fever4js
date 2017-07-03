/**
 * Licensed under MIT (https://github.com/jinyahuan/fever4js/blob/master/LICENSE)
 *
 * @author JinYahuan
 */

(function (w) {
  "use strict";

  const OBJECT_TYPE_NAME = 'object';

  var Objects = {
    version: "1.0.0",

    /* ------------------------------------------------------------------------
     * function
     */

    /**
     * Checks {@param o} is object type(include null).
     *
     * @param o
     * @returns {boolean} true if {@param o} is object type(include null); otherwise false.
     */
    isObject: function (o) {
      return (typeof o === OBJECT_TYPE_NAME);
    },

    /**
     * Checks {@param o} is undefined, null.
     *
     * @param o
     * @returns {boolean} true if {@param o} is undefined, null; otherwise false.
     */
    isUndefinedOrNull: function (o) {
      /* Via (undefined == null) = true, get (str == undefined) or (str == null) = (str == undefined || str == null).
       * And (str == undefined || str == null) just for comfortable.
       */
      return (o == undefined || o == null);
    },

  }

  // means: window._Objects = window.common.Objects = Objects
  var _common = w.common || {};
  w._Objects = _common.Objects = Objects;
  w.common = _common;

  return Objects;
})(window);
