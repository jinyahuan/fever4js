/**
 * Licensed under MIT (https://github.com/jinyahuan/fever4js/blob/master/LICENSE)
 *
 * @author JinYahuan
 */

(function (w) {
  "use strict";

  const NUMBER_TYPE_NAME = 'number';

  var Numbers = {
    version: "1.0.0",

    /* ------------------------------------------------------------------------
     * function
     */

    /**
     * Checks {@param o} is number type(include NaN).
     *
     * @param o
     * @returns {boolean} true if {@param o} is number type(include NaN); otherwise false.
     */
    isNumber: function (o) {
      return (typeof o === NUMBER_TYPE_NAME);
    },

    /**
     * Checks {@param o} is number type(just number).
     *
     * @param o
     * @returns {boolean} true if {@param o} is number type(just number); otherwise false.
     */
    isStrictNumber: function (o) {
      return !this.isNumber(o) ? false
                                 : !isNaN(o);
    },
    
    /**
     * Convert {@param o} to number.
     *
     * @param o number or number string.
     * @returns {boolean} effective number if successful conversion; otherwise NaN.
     */
    toNumber: function (o) {
      return +o;
    },

  }

  // means: window._Numbers = window.common.Numbers = Numbers
  var _common = w.common || {};
  w._Numbers = _common.Numbers = Numbers;
  w.common = _common;

  return Numbers;
})(window);
