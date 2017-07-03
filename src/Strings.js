/**
 * Licensed under MIT (https://github.com/jinyahuan/fever4js/blob/master/LICENSE)
 *
 * @author JinYahuan
 */

(function (w) {
  "use strict";

  const STRING_TYPE_NAME = 'string';

  var _Objects = w._Objects;
  if (_Objects == undefined)
    throw '"Strings.js" requires "Objects.js", and must be included before "Strings.js"';

  var Strings = {
    version: "1.0.0",

    /* ------------------------------------------------------------------------
     * function
     */

    /**
     * Checks {@param o} is string type.
     *
     * @param o
     * @returns {boolean} true if {@param o} is string type; otherwise false.
     */
    isString: function (o) {
      return (typeof o === STRING_TYPE_NAME);
    },

    /**
     * Checks {@param str} is empty(length is 0).
     *
     * @param str
     * @returns {boolean} true if, and only if, {@param str} length is 0; otherwise false.
     */
    isEmpty: function (str) {
      return !this.isString(str) ? false
                                   : str.length == 0;
    },

    /**
     * Checks {@param str} is undefined, null, whitespace, empty(length is 0).
     *
     * @param str
     * @returns {boolean} true if {@param str} is undefined, null, whitespace, empty(length is 0); otherwise false.
     */
    isBlank: function (str) {
      return _Objects.isUndefinedOrNull(str)
              || (this.trim(str).length == 0);
    },

    /**
     * Remove {@param str} any leading and trailing whitespace.
     *
     * @param str
     * @returns {string} {@param str} removed any leading and trailing whitespace, or original {@param str}.
     */
    trim: function (str) {
      if(!this.isString(str))
        throw "Type error";

      return str.length == 0 ? str
                              : str.replace(/(^\s*)|(\s*$)/g, "");
    },

  }

  // means: window._Strings = window.common.Strings = Strings
  var _common = w.common || {};
  w._Strings = _common.Strings = Strings;
  w.common = _common;

  return Strings;
})(window);
