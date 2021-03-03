import 'core-js/fn/object/entries'
import 'core-js/fn/array/includes'
import 'core-js/fn/array/find'
import 'core-js/fn/array/from'
import 'core-js/fn/array/for-each'
import 'core-js/fn/array/map'
import 'core-js/es6/map'
import 'core-js/es6/promise'
import 'core-js/fn/object/assign'
import 'core-js/es6/symbol'
import 'whatwg-fetch'
// missing forEach on NodeList for IE11
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
} else {
  window.dispatchEvent(new Event('resize'));
}
