/**
 * Licensed under MIT (https://github.com/jinyahuan/fever4js/blob/master/LICENSE)
 *
 * @author JinYahuan
 */

(function (w) {
  "use strict";

  var Booleans = {
    version: "1.0.0",

    /* ------------------------------------------------------------------------
     * function
     */

    /**
     * Checks {@param o} is true, false, 1, 0.
     *
     * @param o
     * @returns {boolean} true if {@param o} is true, false, 1, 0; otherwise false.
     */
    isBoolean: function (o) {
      return this.isStrictBoolean(o) || (o === 0 || o === 1);
    },

    /**
     * Checks {@param o} is true, false.
     *
     * @param o
     * @returns {boolean} true if {@param o} is true, false; otherwise false.
     */
    isStrictBoolean: function (o) {
      return (o === false || o === true);
    },

    /**
     * (enforce)Convert {@param o} to boolean.
     *
     * @param o
     * @returns {boolean} false if {@param o} is undefined, null, "", NaN, 0, false; otherwise true.
     */
    enforceToBoolean: function (o) {
      return !!o;
    },

  }

  // means: window._Booleans = window.common.Booleans = Booleans
  var _common = w.common || {};
  w._Booleans = _common.Booleans = Booleans;
  w.common = _common;

  return Booleans;
})(window);
