angular.module('starter')

  .filter('parseTedX', function () {
    var urlPattern = /(tedx)/gi;
    return function (text) {
      return text.replace(urlPattern, '<span class="red">TED<sup>x</sup></span>');
    };
});