import Vue from 'vue'
import comp from './comp/index'
import directives from './directives/index'
function _forEachByObject (obj, projection) {
  try {
    Object.keys(obj).forEach((key) => {
      projection && projection(obj[key], key)
    })
  } catch (e) {
    console.log(e, 'sdfsdfsdf')
  }
}
_forEachByObject(comp, (item) => {
  Vue.component(item.name, item)
})
_forEachByObject(directives, (item) => {
  Vue.directive(item.name, item)
})
export default {
  comp,
  directives
}
