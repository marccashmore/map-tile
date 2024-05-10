// this actually works and returns "hello world" under the search bar

(function () {
 "use strict";
  'use strict';

  var app = angular.module('viewCustom', ['angularLoad']);

   app.component("prmSearchBarAfter", {
  template: '<span style="margin-left: 40%;">Hello World</span>'

})

})();


