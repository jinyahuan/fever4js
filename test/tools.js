/**
 * Licensed under MIT (https://github.com/jinyahuan/fever4js/blob/master/LICENSE)
 *
 * @author JinYahuan
 */

/**
 * Get type of {@param o}.
 *
 * @param o
 * @returns {string}
 */
function getType(o) {
  return typeof o;
}

function printPassInfo(msg) {
  console.log('PASS: ' + msg);
}

function printFailInfo(msg) {
  console.error('FAIL: ' + msg);
}

function assertEquals(msg, expected, actual) {
  var expectedType = getType(expected);
  var actualType = getType(actual);

  // Type does not match, value so.
  if (!(expectedType === actualType)) {
    printFailInfo(msg);
    return;
  }

  switch (expectedType) {
    case "boolean" :
    case "string" :
    case "undefined" :
      assertEqualsForCommon(msg, expected, actual);
      break;
    case "number" :
      assertEqualsForNumber(msg, expected, actual);
      break;
    case "function" :
    case "object" :
      throw 'Can not complete';
      break;
    default:
      throw "Unknown type";
  } // end switch

}

function assertEqualsForCommon(msg, expected, actual) {
  if (expected === actual)
    printPassInfo(msg);
  else
    printFailInfo(msg);
}

/**
 * Notice: Only for type number(include NaN).
 *
 * @param msg
 * @param expected
 * @param actual
 */
function assertEqualsForNumber(msg, expected, actual) {
  if (isNaN(expected) && isNaN(actual)) {
    printPassInfo(msg);
  } else {
    if (expected === actual)
      printPassInfo(msg);
    else
      printFailInfo(msg);
  }
}
