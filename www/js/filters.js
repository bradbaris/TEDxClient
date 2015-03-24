angular.module('starter')

  .filter('parseTedX', function () {
    var urlPattern = /(tedx)/gi;
    return function (text) {
      return text.replace(urlPattern, '<span class="red">TED<sup>x</sup></span>');
    };
})

  .filter('widowFix', function () {
    var widowCapture = /\s(?=[^\s]*$)/g;
    return function (text) {
      text.trim();
      return text.replace(widowCapture, '&nbsp;');
    };
})

  .filter('phoneNum', function () {
    var notNumbers = /\D/g;
    return function (text) {
      var numbers = text.replace(notNumbers, '');
      var callCode = "1"; //normally 011 for USA calls
      callCode += numbers;
      return callCode;
    };
});
