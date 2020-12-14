(function () {
  'use strict';

  angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'src/menu/templates/category-items.template.html',
    bindings: {
      items: '<'
    }
  });
})();
